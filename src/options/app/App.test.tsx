import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('options', () => {
  describe('App component', () => {
    it('renders "options"', () => {
      render(<App />)
      const linkElement = screen.getByText(/options/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
