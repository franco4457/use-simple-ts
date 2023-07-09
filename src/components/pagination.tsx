import { usePaginationTS } from '@hooks/use-pagination-ts'
import ALBUMS from '@utils/mocks/albums.json'

export function Pagination () {
  const { items } = usePaginationTS(ALBUMS)
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USER ID</th>
            <th>TITLE</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, title, userId }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{userId}</td>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
