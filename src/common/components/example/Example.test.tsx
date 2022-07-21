import { render, screen } from '@testing-library/react'
import React from 'react'
import Example from './Example'

describe('common', () => {
  describe('components', () => {
    describe('Example', () => {
      it('renders "re-usable"', () => {
        render(<Example />)
        const linkElement = screen.getByText(/re-usable/i)
        expect(linkElement).toBeInTheDocument()
      })
    })
  })
})
