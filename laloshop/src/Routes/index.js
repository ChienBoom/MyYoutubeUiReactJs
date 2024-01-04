import HomeLayout from '~/Layout/HomeLayout';
import RegisterLayout from '~/Layout/RegisterLayout';
import ProductLayout from '~/Layout/ProductLayout';

import HomePage from '~/Page/HomePage';
import LoginPage from '~/Page/LoginPage/LoginPage';
import RegisterPage from '~/Page/RegisterPage';
import ProductDetailPage from '~/Page/ProductDetailPage';

import config from '~/Config';

const publicRoutes = [
    {
        path: config.routes.home,
        page: HomePage,
        layout: HomeLayout,
    },
    {
        path: config.routes.search,
        page: HomePage,
        layout: HomeLayout,
    },
    {
        path: config.routes.register,
        page: RegisterPage,
        layout: RegisterLayout,
    },
    {
        path: config.routes.login,
        page: LoginPage,
        layout: RegisterLayout,
    },
    {
        path: config.routes.product,
        page: ProductDetailPage,
        layout: ProductLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
