import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

test('renders learn react title', () => {
  render(<Home />)
  const titleElement = screen.getByText(/learn react/i)
  expect(titleElement).toBeInTheDocument()
})
