import { Link } from 'react-router-dom'

export default function AboutPage(): JSX.Element {
  return (
    <>
      <h1>About</h1>
      <div>
        This is the about page. <Link to="/">Go to Index Page.</Link>
      </div>
    </>
  )
}
