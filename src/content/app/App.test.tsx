import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('content', () => {
  describe('App component', () => {
    it('renders "content"', () => {
      render(<App />)
      const linkElement = screen.getByText(/content/i)
      expect(linkElement).toBeInTheDocument()
    })
  })
})
