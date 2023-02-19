import { RouteObject } from 'react-router-dom'
import { Feed } from './Feed'
import { Home } from './Home'
import { PostDetail } from './PostDetail'
import { WritePost } from './WritePost'

const routeObjects: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/write',
    element: <WritePost />,
  },
  {
    path: '/:id',
    errorElement: <>잘못된 아이디인듯?</>,
    element: <PostDetail />,
  },
  {
    path: '*',
    errorElement: <>omg error omg</>,
    element: <>not found</>,
  },
]

export { routeObjects }
