import { renderRoutes } from 'react-router-config'

import Root from 'containers/root'

import Home from './home'
import Farms from './farms'
import Fields from './fields'
import Photos from './photos'

export default renderRoutes([
  {
    component: Root,
    routes: [
      {
        component: Farms,
        key: 'farms',
        path: '/farms'
      },
      {
        component: Fields,
        key: 'fields',
        path: '/fields'
      },
      {
        component: Photos,
        key: 'photos',
        path: '/photos'
      },
      {
        component: Home,
        key: 'home',
        exact: true,
        path: '/'
      }
    ]
  }
])
