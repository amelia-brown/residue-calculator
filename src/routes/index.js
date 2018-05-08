import { renderRoutes } from 'react-router-config'

import Root from 'containers/root'

import Home from './home'
import Farms from './farms'
import Photos from './photos'
// import Fields from './fields'
// import Photos from './photos'

export default renderRoutes([
  {
    component: Root,
    routes: [
      {
        component: Photos,
        key: 'photos',
        path: '/photos',
        exact: true
      },
      /*
      {
        component: Fields,
        key: 'fields',
        path: '/farms/:farmId/fields'
      },
      */
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
