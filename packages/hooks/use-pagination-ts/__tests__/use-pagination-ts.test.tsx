import { renderHook, act } from '@testing-library/react'
import ALBUMS from './mock.json'
import { usePaginationTS } from '../src'

describe('usePaginationTS', () => {
  it('should work correctly', () => {
    const { result } = renderHook(() => usePaginationTS({ items: [] }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.maxPage).toBe(0)
    expect(result.current.items).toStrictEqual([])
    expect(result.current.nextPage).toBeInstanceOf(Function)
    expect(result.current.prevPage).toBeInstanceOf(Function)
  })
  it('should work correctly with initial page', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.maxPage).toBe(10)
    expect(result.current.items).toStrictEqual(ALBUMS.slice(0, 10)) // 10 is the default value
  })
  it('should work correctly with custom limit', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS, limit: 5 }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.maxPage).toBe(20)
  })
  it('should work correctly with custom limit 2', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS, limit: 20 }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.maxPage).toBe(5)
    expect(result.current.items.length).toBe(20)
    expect(result.current.items).toStrictEqual(ALBUMS.slice(0, 20))
  })
  it('should be go to next page', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
    act(() => {
      result.current.nextPage()
    })
    expect(result.current.currentPage).toBe(2)
    expect(result.current.items.every((item) => item.userId === 2)).toBe(true)
  })
  it('should be go to prev page', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
    act(() => {
      result.current.nextPage()
    })
    expect(result.current.currentPage).toBe(2)
    expect(result.current.items.every((item) => item.userId === 2)).toBe(true)
    act(() => {
      result.current.prevPage()
    })
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
  })
  it('should not go to prev page when current page is 1', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
    act(() => {
      result.current.prevPage()
    })
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
  })
  it('should not go to next page when current page is max page', () => {
    const { result } = renderHook(() => usePaginationTS({ items: ALBUMS }))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.items.every((item) => item.userId === 1)).toBe(true)
    for (let i = 0; i < result.current.maxPage; i++) {
      act(() => {
        result.current.nextPage()
      })
    }
    expect(result.current.currentPage).toBe(10)
    expect(result.current.items.every((item) => item.userId === 10)).toBe(true)
    act(() => {
      result.current.nextPage()
    })
    expect(result.current.currentPage).toBe(10)
    expect(result.current.items.every((item) => item.userId === 10)).toBe(true)
  })
})
