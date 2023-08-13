import { useState } from 'react'

export function usePaginationTS<T> (itemsToPaginate: T[], itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState(itemsToPaginate.slice(0, itemsPerPage))
  const maxPage = Math.ceil(itemsToPaginate.length / itemsPerPage)
  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
      setItems(itemsToPaginate.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage))
    }
  }
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setItems(itemsToPaginate.slice((currentPage - 2) * itemsPerPage, (currentPage - 1) * itemsPerPage))
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
