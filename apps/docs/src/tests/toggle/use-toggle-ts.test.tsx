import { ToggleBoolean } from '@components/toggle/toggle-boolean'
import { ToggleObject } from '@components/toggle/toggle-object'
import { TOGGLE_BUTTON_TEXT } from '@/utils/const'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

const { ON, OFF } = TOGGLE_BUTTON_TEXT

describe('useToggleTS', () => {
  afterEach(cleanup)
  it('should be render', () => {
    render(<ToggleBoolean />)
    expect(true).toBe(true)
  })
  it('should be render a button', () => {
    render(<ToggleBoolean />)
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })
  it('should be render a button with text OFF', () => {
    render(<ToggleBoolean />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(OFF)
  })
  it('should be turn ON when clickon', () => {
    render(<ToggleBoolean />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    fireEvent.click($button)
    expect($button.textContent).toBe(ON)
  })
  it('should be can recibe a initialState', () => {
    render(<ToggleBoolean initialState />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(ON)
  })
  it('should be can recibe a initialState', () => {
    render(<ToggleBoolean initialState={false} />)
    const $button = screen.getByRole('button') as HTMLButtonElement
    expect($button.textContent).toBe(OFF)
  })
  it('should be can recibe a intialState a object with boolean properties', () => {
    render(<ToggleObject initialState={{ arg1: true, arg2: true }} />)
    const $button = screen.getAllByRole('button') as HTMLButtonElement[]
    expect($button[0].textContent).toBe(ON)
    expect($button[1].textContent).toBe(ON)
    fireEvent.click($button[0])
    expect($button[0].textContent).toBe(OFF)
    expect($button[1].textContent).toBe(ON)
  })
})
