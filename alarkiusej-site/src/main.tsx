import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Content protection
document.addEventListener('contextmenu', (e) => e.preventDefault())
document.addEventListener('copy', (e) => e.preventDefault())
document.addEventListener('cut', (e) => e.preventDefault())
document.addEventListener('paste', (e) => {
  // Allow paste in inputs/textareas
  const tag = (e.target as HTMLElement).tagName
  if (tag !== 'INPUT' && tag !== 'TEXTAREA') e.preventDefault()
})
document.addEventListener('dragstart', (e) => e.preventDefault())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
