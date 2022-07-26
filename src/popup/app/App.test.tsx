import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('popup', () => {
  describe('App component', () => {
    it('renders "popup-app"', () => {
      render(<App />)
      const linkElement = screen.getByText(/pop-up/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
