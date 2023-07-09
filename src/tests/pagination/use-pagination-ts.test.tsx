import { Pagination } from '@components/pagination'
import { render, screen } from '@testing-library/react'
describe('usePaginationTS', () => {
  it('should be works to', () => {
    expect(1).toBe(1)
  })
  it('should be render table Pagination always', async () => {
    render(<Pagination />)
    const table = screen.getByRole('table')
    expect(table).toBeDefined()
  })
  it('should be render correct head Pagination always', async () => {
    render(<Pagination />)
    const headerRows = screen.getAllByRole('columnheader')
    expect(headerRows[0].textContent).toMatch(/id/i)
    expect(headerRows[1].textContent).toMatch(/user id/i)
    expect(headerRows[2].textContent).toMatch(/title/i)
  })
  it('should be render a table body', () => {
    render(<Pagination />)
    const bodyRows = screen.getAllByRole('rowgroup')
    expect(bodyRows[1]).toBeDefined()
  })
  it('should be render rows in table body', () => {
    render(<Pagination />)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...bodyRows] = screen.getAllByRole('row')
    expect(bodyRows.length).toBeGreaterThan(0)
  })
  it('should be render 10 rows for page', () => {
    render(<Pagination />)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...bodyRows] = screen.getAllByRole('row')
    expect(bodyRows).toHaveLength(10)
  })
})
