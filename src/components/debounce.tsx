import { useEffect, useState } from 'react'

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}
const requestTodos = async (query?:string): Promise<Todo[]> => {
  const querySeted = query !== '' ? `?${query}` : ''
  const res = await fetch(`${TODOS_URL}${querySeted}`).then((res) => res.json())
  return res
}

export function Debounce () {
  const [todos, setTodos] = useState<Todo[]>([])

  const handlerTodos = async () => {
    const todos = await requestTodos()
    setTodos(todos)
  }

  useEffect(() => {
    if (todos.length === 0) handlerTodos()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section>
        <header>
        <h2>Debounce</h2>
        </header>
        <div>
            <input name="search" type="text" placeholder="buscar..." />
            <button>Buscar</button>
        </div>
        <ul>
            {todos.map((todo, i) => (<li key={i}>
                <input type="checkbox" />
                <h4>{todo.title}</h4>
            </li>))}
        </ul>
      </section>
    </>
  )
}
