import { useState } from 'react'

export interface UsePaginationTsProps<T> {
  items: T[]
  limit?: number
}
export function usePaginationTS<T>({
  items: itemsToPaginate,
  limit = 10
}: UsePaginationTsProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState(itemsToPaginate.slice(0, limit))
  const maxPage = Math.ceil(itemsToPaginate.length / limit)
  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
      setItems(itemsToPaginate.slice(currentPage * limit, (currentPage + 1) * limit))
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setItems(itemsToPaginate.slice((currentPage - 2) * limit, (currentPage - 1) * limit))
    }
  }
  return {
    items,
    currentPage,
    maxPage,
    nextPage,
    prevPage
  }
}

export type UsePaginationTsReturn = ReturnType<typeof usePaginationTS>
