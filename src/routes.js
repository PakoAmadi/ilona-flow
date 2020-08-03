const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./views/Home'),
    },
    {
        path: '/flowers',
        name: 'flowers',
        component: () => import('./views/Products'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/About')
    },
    {
        path: '/flowers/details',
        name: 'flowers_details',
        component: () => import('./views/ProductDetails')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./views/ShoppingCart')
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: () => import('./views/WishlistPage')
    }
];

export default routes;
