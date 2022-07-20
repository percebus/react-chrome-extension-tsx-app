import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/App'

console.info('content/index')

const divHTMLElement = document.createElement('div')
divHTMLElement.id = 'react-chrome-extension-app-content'
document.body.appendChild(divHTMLElement)

ReactDOM
  .createRoot(divHTMLElement)
  .render(<App />)
