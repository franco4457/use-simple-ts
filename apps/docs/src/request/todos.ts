const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}
export const requestTodos = async (query?: string): Promise<Todo[]> => {
  const querySeted = query !== '' ? `?${query}` : ''
  const res = await fetch(`${TODOS_URL}${querySeted}`).then((res) => res.json())
  return res
}
