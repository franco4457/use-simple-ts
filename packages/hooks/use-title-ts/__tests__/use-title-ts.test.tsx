import { act, renderHook } from '@testing-library/react'

import { useTitleTS } from '../src'

describe('useTitleTS', () => {
  afterEach(() => {
    document.title = ''
  })
  it('should work correctly', () => {
    const { result } = renderHook(() => useTitleTS())
    expect(result.current.updateTitle).toBeInstanceOf(Function)
  })
  it('should be set title page', () => {
    const TITLE = 'Test title'
    expect(document.title).toBeFalsy()
    renderHook(() => useTitleTS({ title: TITLE }))
    expect(document.title).toBe(TITLE)
  })
  it('should be update title page', () => {
    const TITLE = 'Test title'
    expect(document.title).toBeFalsy()
    const { result } = renderHook(() => useTitleTS())
    expect(document.title).toBeFalsy()
    act(() => {
      result.current.updateTitle(TITLE)
    })
    expect(document.title).toBe(TITLE)
  })
  it('should be set title page and update title page', () => {
    const TITLE = 'Test title'
    const NEW_TITLE = 'New test title'
    expect(document.title).toBeFalsy()
    const { result } = renderHook(() => useTitleTS({ title: TITLE }))
    expect(document.title).toBe(TITLE)
    act(() => {
      result.current.updateTitle(NEW_TITLE)
    })
    expect(document.title).toBe(NEW_TITLE)
  })
  it('should be set title page and update title page multiples', () => {
    const TITLE = 'Test title'
    const NEW_TITLE = 'New test title'
    const NEW_TITLE_2 = 'New test title 2'
    expect(document.title).toBeFalsy()
    const { result } = renderHook(() => useTitleTS({ title: TITLE }))
    expect(document.title).toBe(TITLE)
    act(() => {
      result.current.updateTitle(NEW_TITLE)
    })
    expect(document.title).toBe(NEW_TITLE)
    act(() => {
      result.current.updateTitle(NEW_TITLE_2)
    })
    expect(document.title).toBe(NEW_TITLE_2)
  })
})
