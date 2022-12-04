import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`

export default function QueryPage(): JSX.Element {
  const { loading, error, data } = useQuery(BOOKS)

  return (
    <>
      <h1>Query</h1>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Error: ${error.message}</div>}
      {data && <pre>{JSON.stringify(data)}</pre>}

      <div>
        This is the query page. <Link to="/">Go to Index Page.</Link>
      </div>
    </>
  )
}
