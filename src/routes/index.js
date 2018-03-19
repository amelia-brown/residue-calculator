import { renderRoutes } from 'react-router-config'

import Root from 'containers/root'

import Home from './home'

export default renderRoutes([
  {
    component: Root,
    routes: [
      {
        component: Home,
        key: 'home',
        path: '/'
      }
    ]
  }
])
