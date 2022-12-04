import { Link } from 'react-router-dom'

export default function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>Not Found</h1>
      <div>
        Not Found. <Link to="/">Go to Index Page.</Link>
      </div>
    </>
  )
}
