import { useEffect, useState } from 'react'

export interface UseTitleTsProps {
  title?: string
}

export function useTitleTS({ title }: UseTitleTsProps = {}) {
  const [value, setValue] = useState(title)
  const updateTitle = (title: string) => setValue(title)
  useEffect(() => {
    if (!value || value === '') return
    const document = typeof window === 'undefined' ? null : window.document
    if (!document) return
    document.title = value
  }, [value])
  return { updateTitle }
}

export type UseTitleTsReturn = ReturnType<typeof useTitleTS>
