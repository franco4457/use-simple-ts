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
    const title = (document.querySelector('title') ||
      document.createElement('title')) as HTMLTitleElement
    title.innerText = value
    document.getElementsByTagName('head')[0].appendChild(title)
  }, [value])
  return { updateTitle }
}

export type UseTitleTsReturn = ReturnType<typeof useTitleTS>
