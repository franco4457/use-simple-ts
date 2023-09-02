import { usePaginationTS } from '@use-simple-ts/use-pagination-ts'
import ALBUMS from '@utils/mocks/albums.json'

export function Pagination() {
  const { items, nextPage, currentPage, maxPage, prevPage } =
    usePaginationTS(ALBUMS)
  return (
    <section>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 'fit-content'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%'
          }}
        >
          <strong>
            Current Page: <span>{currentPage}</span>
          </strong>
          <strong>
            Total Pages: <span>{maxPage}</span>
          </strong>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            width: '100%'
          }}
        >
          <button onClick={nextPage}>NEXT</button>
          <button onClick={prevPage}>PREV</button>
        </div>
      </header>
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
