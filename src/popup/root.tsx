import React from 'react'
import ReactDOM from 'react-dom/client'
import './root.css'
import App from './app/App'

const divHTMLElement = document.getElementById('root') as HTMLElement
ReactDOM
  .createRoot(divHTMLElement)
  .render(<App />)
