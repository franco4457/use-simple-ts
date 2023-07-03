import { useState } from 'react'
import USER_LIST from '@utils/mocks/users.json'
import { useDebounceTS } from '@/hooks/use-debounce-ts'
export function Debounce () {
  const [users, setUsers] = useState(USER_LIST)

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = USER_LIST.filter((user) => {
      return user.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setUsers(result)
  }

  const handleSearch = useDebounceTS(handlerSearch, 500)

  return (
    <>
      <section>
        <header>
          <h2>Debounce</h2>
        </header>
        <div>
          <input
            name="search"
            type="text"
            placeholder="buscar..."
            onChange={handleSearch}
          />
        </div>
        <ul>
          {users.map((user, i) => (
            <li key={i}>
              <h4>{user.name}</h4>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
