import { useState } from 'react'
import USER_LIST from '@/mocks/users.json'

export function Debounce () {
  const [users, setUsers] = useState(USER_LIST)
  const [inputSearch, setInputSearch] = useState<string>('')

  const handlerInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value)
  }

  const handleSearch = () => {
    const result = USER_LIST.filter((user) => {
      return user.name.toLowerCase().includes(inputSearch.toLowerCase())
    })
    setUsers(result)
  }
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
            value={inputSearch}
            onChange={handlerInputSearch}
          />

          <button onClick={() => handleSearch()}>Buscar</button>
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
