/*
 * Bakes the rendered page into dist/index.html.
 *
 * The site is a client-rendered React app, so the HTML it ships is an empty
 * <div id="root"></div>. Googlebot renders JavaScript eventually; most other
 * crawlers — including the ones behind AI answers — don't run it at all and
 * see a blank page. This runs after the two Vite builds (see "build" in
 * package.json), renders <App /> to a string with the SSR bundle, and writes
 * that string into the client build's index.html. The browser then hydrates
 * over it (src/main.jsx).
 *
 * If anything here fails the build fails: shipping the empty shell silently
 * is the exact problem this exists to prevent.
 */
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrDir = path.join(root, 'dist-ssr')
const EMPTY_ROOT = '<div id="root"></div>'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const markup = render()

const html = await readFile(htmlPath, 'utf8')
if (!html.includes(EMPTY_ROOT)) {
  throw new Error(`prerender: expected ${EMPTY_ROOT} in dist/index.html — was it already prerendered?`)
}
if (markup.length < 5000) {
  throw new Error(`prerender: rendered markup is only ${markup.length} bytes — something rendered empty`)
}

await writeFile(htmlPath, html.replace(EMPTY_ROOT, () => `<div id="root">${markup}</div>`))
await rm(ssrDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(markup.length / 1024).toFixed(1)} kB of markup into dist/index.html`)
