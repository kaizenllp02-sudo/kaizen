import { StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { displayAsciiArt } from './components/asciiArt.jsx'

displayAsciiArt();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
)
