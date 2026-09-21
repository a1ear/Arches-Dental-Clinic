import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { LocaleProvider } from './i18n/LocaleContext.jsx'

// Rendered once at build time by scripts/prerender.mjs. The output is always
// the English page: LocaleProvider starts in English, and a visitor's saved
// language is applied after hydration.
export function render() {
  return renderToString(
    <LocaleProvider>
      <App />
    </LocaleProvider>
  )
}
