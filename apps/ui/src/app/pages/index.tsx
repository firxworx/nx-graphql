import { Link } from 'react-router-dom'

export default function IndexPage(): JSX.Element {
  return (
    <>
      <h1>Index</h1>
      <div>
        This is the index page. <Link to="/about">Go to About Page.</Link>
      </div>
    </>
  )
}
