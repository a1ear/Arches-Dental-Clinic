import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LocaleProvider } from './i18n/LocaleContext.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>
)

// A production build ships with the page already rendered into #root (see
// scripts/prerender.mjs), so that crawlers get real text in the first
// response. Attach to that markup rather than throwing it away. In dev the
// element is empty and this is an ordinary client render.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
