import { useEffect, useState } from 'react'

export interface UseFaviconTsProps {
  url?: string
}

export function useFaviconTS({ url }: UseFaviconTsProps = {}) {
  const [value, setValue] = useState(url)
  const updateFavicon = (url: string) => setValue(url)
  useEffect(() => {
    if (!value || value === '') return
    const document = typeof window === 'undefined' ? null : window.document
    if (!document) return
    const link = (document.querySelector("link[rel*='icon']") ||
      document.createElement('link')) as HTMLLinkElement
    link.type = 'image/x-icon'
    link.rel = 'icon'
    link.href = value
    document.getElementsByTagName('head')[0].appendChild(link)
  }, [value])
  return { updateFavicon }
}

export type UseFaviconTsReturn = ReturnType<typeof useFaviconTS>
