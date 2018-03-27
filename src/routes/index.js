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
        component: Photos,
        key: 'photos',
        path: '/farms/:id/fields/:id/photos'
      },
      {
        component: Fields,
        key: 'fields',
        path: '/farms/:id/fields'
      },
      {
        component: Farms,
        key: 'farms',
        path: '/farms'
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
