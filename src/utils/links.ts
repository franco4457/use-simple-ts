type LinksType = {
        name: string
        path: string
        children: LinksType[]
    }

export const links: LinksType[] = [
  {
    name: 'Home',
    path: '/',
    children: []

  },
  {
    name: 'useToggle',
    path: '/toggle',
    children: []
  },
  {
    name: 'useDebounce',
    path: '/debounce',
    children: []
  },
  {
    name: 'usePagination',
    path: '/pagination',
    children: []
  }
]
