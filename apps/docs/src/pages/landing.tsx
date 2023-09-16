import { links } from '@utils/links'
import { Welcome } from '@components/welcome'
import { Link } from 'wouter'

export function Landing() {
  return (
    <>
      <Welcome />
      <section>
        <header>
          <h1>Links</h1>
        </header>
        <section>
          <ul>
            {links.slice(1).map((link, i) => (
              <li key={i}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  )
}
