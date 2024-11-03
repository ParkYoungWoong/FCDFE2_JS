import { createRouter } from '../core/router.js'
import Home from './Home.js'
import About from './About.js'
import SignIn from './SignIn.js'
import Count from './Count.js'

export default createRouter([
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/count',
    component: Count
  }
])