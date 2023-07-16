import { Pagination } from '@components/pagination'
import { fireEvent, render, screen } from '@testing-library/react'

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
  it('should be render current page and current page to be 1 at the beginnig', () => {
    render(<Pagination />)
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
  })
  it('should be render total pages', () => {
    render(<Pagination />)
    const $totalPages = screen.getByText(/total pages/i).children[0]
    expect($totalPages.textContent).toBe('10')
  })
  it('should be render a next button', () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    expect($nextBtn).toBeDefined()
  })
  it('should be render a next page when click the next btn', () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    fireEvent.click($nextBtn)
    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 10}`)
      expect(userId.textContent).toMatch('2')
    })
  })
  it('should be render a nexts pages when click the next btn multiples times', async () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
    fireEvent.click($nextBtn)

    expect($currentPage.textContent).toBe('2')
    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 10}`)
      expect(userId.textContent).toMatch('2')
    })

    fireEvent.click($nextBtn)
    expect($currentPage.textContent).toBe('3')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 20}`)
      expect(userId.textContent).toMatch('3')
    })
  })

  it('should not do anything when it is the last page and the next button is clicked', async () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    const $totalPages = screen.getByText(/total pages/i).children[0]
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
    for (let i = 0; i < Number($totalPages.textContent); i++) {
      fireEvent.click($nextBtn)
    }
    expect($currentPage.textContent).toBe('10')
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)

    expect($currentPage.textContent).toBe('10')

    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 90}`)
      expect(userId.textContent).toMatch('10')
    })
  })
  it('should be render a prev button', () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/prev/i)
    expect($nextBtn).toBeDefined()
  })
  it('should not do anything when it is the init page and the prev button is clicked', async () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/prev/i)
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    expect($currentPage.textContent).toBe('1')
    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i}`)
      expect(userId.textContent).toMatch('1')
    })
  })
  it('should be render a prev page when click the prev btn', () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    const $prevBtn = screen.getByText(/prev/i)
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    fireEvent.click($prevBtn)
    expect($currentPage.textContent).toBe('4')
    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 30}`)
      expect(userId.textContent).toMatch('4')
    })
  })
  it('should be render a prevs pages when click the prev btn multiples times', () => {
    render(<Pagination />)
    const $nextBtn = screen.getByText(/next/i)
    const $prevBtn = screen.getByText(/prev/i)
    const $currentPage = screen.getByText(/current page/i).children[0]
    expect($currentPage.textContent).toBe('1')
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    fireEvent.click($nextBtn)
    fireEvent.click($prevBtn)
    fireEvent.click($prevBtn)
    expect($currentPage.textContent).toBe('2')
    const bodyRows = screen.getAllByRole('row')
    bodyRows.forEach((row, i) => {
      if (i === 0) return
      const [id, userId] = row.children
      expect(id.textContent).toMatch(`${i + 10}`)
      expect(userId.textContent).toMatch('2')
    })
  })
})
