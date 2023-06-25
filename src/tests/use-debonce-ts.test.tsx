import { Debounce } from '@/components/debounce'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('useDebounceTS', () => {
  afterEach(cleanup)
  it('it should be works to', () => {
    render(<div>test</div>)
    screen.getByText('test')
  })
  it('should be render header Debounce always', async () => {
    render(<Debounce />)
    const header = await screen.findByText('Debounce')
    expect(header).toBeDefined()
  })
  it('should be render all users correctly', async () => {
    render(<Debounce />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(10)
  })
  it('should be render a search input', async () => {
    render(<Debounce />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
  })
  it('user should be can type', async () => {
    const user = await userEvent.setup()
    render(<Debounce />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await user.type(input, 'a')
    expect(input.value).toBe('a')
  })
  it('should filter after debouce', async () => {
    // const user = userEvent.setup()
    render(<Debounce />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    await fireEvent.change(input, { target: { value: 'lean' } })
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(10)
    await Promise.resolve(() => setTimeout(() => {
      return undefined
    }, 1000))
    const usersFiltered = await screen.findAllByRole('listitem')
    expect(usersFiltered).toHaveLength(1)
  })
})
