const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home'),
    meta: { layout: 'main' }
  },
  {
    path: '/flowers',
    name: 'flowers',
    component: () => import('./views/Products'),
    meta: { layout: 'main' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About'),
    meta: { layout: 'main' }
  },
  {
    path: '/flowers/details',
    name: 'flowers_details',
    component: () => import('./views/ProductDetails'),
    meta: { layout: 'main' }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/ShoppingCart'),
    meta: { layout: 'main' }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('./views/WishlistPage'),
    meta: { layout: 'main' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/LoginRegister'),
    meta: { layout: 'main' }
  }
];

export default routes;
