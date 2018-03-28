import { renderRoutes } from 'react-router-config'

import Root from 'containers/root'

import Home from './home'
import Farms from './farms'
// import Fields from './fields'
// import Photos from './photos'

export default renderRoutes([
  {
    component: Root,
    routes: [
      /*
      {
        component: Photos,
        key: 'photos',
        path: '/farms/:farmId/fields/:fieldId/photos'
      },
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
