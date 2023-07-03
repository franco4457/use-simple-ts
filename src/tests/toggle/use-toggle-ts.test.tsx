import { Toggle } from '@/components/toggle'
import { TOGGLE_BUTTON_TEXT } from '@/utils/const'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

describe('useToggleTS', () => {
  afterEach(cleanup)
  it('should be render', () => {
    render(<Toggle />)
    expect(true).toBe(true)
  })
  it('should be render a button', () => {
    render(<Toggle />)
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })
  it('should be render a button with text OFF', () => {
    render(<Toggle />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(OFF)
  })
  it('should be turn ON when clickon', () => {
    render(<Toggle />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    fireEvent.click($button)
    expect($button.textContent).toBe(ON)
  })
  it('should be can recibe a initialState', () => {
    render(<Toggle initialState />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(ON)
  })
  it('should be can recibe a initialState', () => {
    render(<Toggle initialState={false} />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(OFF)
  })
  it('should be can recibe a intialState a object with boolean properties', () => {
    render(<Toggle initialState={{ arg1: true, arg2: true }} />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(ON)
  })
})
