import { Route, Routes } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// import styles from './app.module.css'
import { AppLayout } from './layout/Layout'

import IndexPage from './pages/index'
import QueryPage from './pages/query'
import AboutPage from './pages/about'
import NotFoundPage from './pages/404'

const client = new ApolloClient({
  uri: 'http://localhost:4200/api',
  cache: new InMemoryCache(),
})

export function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="query" element={<QueryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ApolloProvider>
  )
}

export default App
