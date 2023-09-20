import { act, cleanup, renderHook } from '@testing-library/react'

import { useFaviconTS } from '../src'

describe('useFaviconTS', () => {
  afterEach(() => {
    cleanup()
    const link = document.querySelector('link[rel="icon"]')
    link?.remove()
  })
  it('should work correctly', () => {
    const { result } = renderHook(() => useFaviconTS())
    expect(result.current.updateFavicon).toBeInstanceOf(Function)
  })
  it('should be set href favicon', () => {
    renderHook(() => useFaviconTS({ url: 'https://www.google.com/favicon.ico' }))
    const link = document.querySelector('link[rel="icon"]')
    expect(link).toBeDefined()
    expect(link?.getAttribute('href')).toBe('https://www.google.com/favicon.ico')
  })
  it('should be change favicon', async () => {
    const { result } = renderHook(() => useFaviconTS({ url: 'https://www.google.com/favicon.ico' }))
    const link = document.querySelector('link[rel="icon"]')
    expect(link).toBeDefined()
    expect(link?.getAttribute('href')).toBe('https://www.google.com/favicon.ico')
    act(() => {
      result.current.updateFavicon('https://www.google.com/favicon2.ico')
    })
    expect(link?.getAttribute('href')).toBe('https://www.google.com/favicon2.ico')
  })
  it("should don't change favicon if don't pass ur", () => {
    const { result } = renderHook(() => useFaviconTS({ url: 'https://www.google.com/favicon.ico' }))
    const link = document.querySelector('link[rel="icon"]')
    expect(link).toBeDefined()
    expect(link?.getAttribute('href')).toBe('https://www.google.com/favicon.ico')
    act(() => {
      // @ts-expect-error test case
      result.current.updateFavicon()
    })
    expect(link?.getAttribute('href')).toBe('https://www.google.com/favicon.ico')
  })

  it("should be update the favicon even if don't exist", () => {
    const { result } = renderHook(() => useFaviconTS())
    const link = document.querySelector('link[rel="icon"]')
    expect(link).toBeNull()
    act(() => {
      result.current.updateFavicon('./test-favicon')
    })
    const link2 = document.querySelector('link[rel="icon"]')
    expect(link2?.getAttribute('href')).toBe('./test-favicon')
  })
})
