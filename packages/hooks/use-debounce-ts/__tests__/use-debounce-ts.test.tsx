import { act, renderHook, waitFor } from '@testing-library/react'

import { useDebounceTS } from '../src'
import { useState } from 'react'

describe('useDebounceTs', () => {
  it.concurrent('should work correctly', () => {
    const { result } = renderHook(() => useDebounceTS(() => undefined))
    expect(result.current).toBeInstanceOf(Function)
  })
  it.concurrent('should be debounce simple functions', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 100))
    act(() => {
      result.current()
    })
    expect(count).toBe(0)
    await waitFor(
      () => {
        expect(count).toBe(1)
      },
      { timeout: 1000 }
    )
  })

  it('should be debounce functions that affects states', async () => {
    const { result: counter } = renderHook(() => {
      const [count, setCount] = useState(0)
      const add = () => setCount((c) => c + 1)
      return { count, add }
    })
    const { result } = renderHook(() => useDebounceTS(() => act(() => counter.current.add()), 500))
    act(() => {
      result.current()
    })
    expect(counter.current.count).toBe(0)
    await waitFor(
      () => {
        expect(counter.current.count).toBe(1)
      },
      { timeout: 1000 }
    )
  })
  it('should be debounce functions that affects states 2', async () => {
    const { result } = renderHook(() => {
      const [state, setState] = useState('aaa')
      const update = () => setState(() => 'bbb')
      return { state, update }
    })
    const debounce = renderHook(() => useDebounceTS(() => act(() => result.current.update()), 500))
    act(() => {
      debounce.result.current()
    })
    expect(result.current.state).toBe('aaa')
    await waitFor(
      () => {
        expect(result.current.state).toBe('bbb')
      },
      { timeout: 1000 }
    )
  })
  it.concurrent('should debunce with multiple calls', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 100))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current()
    })
    expect(count).toBe(0)
    await waitFor(
      () => {
        expect(count).toBe(1)
      },
      { timeout: 1000 }
    )
  })
  it.concurrent('should be debounce with multiple calls and multiple times', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 100))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current()
    })
    expect(count).toBe(0)
    await waitFor(
      () => {
        expect(count).toBe(1)
      },
      { timeout: 1000 }
    )
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current()
    })
    expect(count).toBe(1)
    await waitFor(
      () => {
        expect(count).toBe(2)
      },
      { timeout: 1000 }
    )
  })
  it.concurrent('should be cancel debounce when call cancel', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 200))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current.cancel()
    })
    expect(count).toBe(0)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(0)
        resolve(0)
      }, 1000)
    })
  })
  it.concurrent('should be cancel debounce when call cancel 2', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 200))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current.cancel()
    })
    expect(count).toBe(0)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(0)
        resolve(0)
      }, 1000)
    })
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current()
    })
    expect(count).toBe(0)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(1)
        resolve(0)
      }, 1000)
    })
  })
  it.concurrent('should be flush debounce when call flush', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 200))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current.flush()
    })
    expect(count).toBe(1)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(1)
        resolve(0)
      }, 1000)
    })
  })
  it.concurrent('should be flush debounce when call multiples flush', async () => {
    let count = 0
    const fn = () => {
      count++
    }
    const { result } = renderHook(() => useDebounceTS(fn, 200))
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current.flush()
    })
    expect(count).toBe(1)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(1)
        resolve(0)
      }, 1000)
    })
    act(() => {
      result.current()
      result.current()
      result.current()
      result.current.flush()
    })
    expect(count).toBe(2)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(2)
        resolve(0)
      }, 1000)
    })
    act(() => {
      result.current()
      result.current.flush()
      result.current.flush()
      result.current.flush()
    })
    expect(count).toBe(5)
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(count).toBe(5)
        resolve(0)
      }, 1000)
    })
  })
})
