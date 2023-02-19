import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  },
})
export default queryClient
