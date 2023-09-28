import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import GoodsPage from './pages/GoodsPage'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, BASKET_ROUTE, GOODS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts'

export const authRoutes = [
  {
      path: ADMIN_ROUTE,
      element: <Admin/>
  },
  {
      path: BASKET_ROUTE,
      element: <Basket/>
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop/>
  },
  {
    path: GOODS_ROUTE + '/:id',
    element: <GoodsPage/>
  },
  {
    path: HOME_ROUTE,
    element: <Home/>
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth/>
  },
]