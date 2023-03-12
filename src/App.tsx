import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Global } from '@emotion/react'
import { QueryClientProvider } from 'react-query'

import { routeObjects } from '@routes/index'
import queryClient from '@libs/queryClient'
import { globalStyles } from '@styles/global'
import { Layout } from './components/Layout'

type Props = {}

const App: React.FC<Props> = () => {
  const router = createBrowserRouter(routeObjects)

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </QueryClientProvider>
  )
}

export default App
