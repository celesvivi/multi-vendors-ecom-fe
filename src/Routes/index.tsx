import { IRoute } from '@/Types';

import NotFound from '@/Pages/NotFound';
import LandingPage from '@/Pages/LandingPage';

import DefaultLayout from '@/Layouts/Default';

const publicRoutes: IRoute[] = [
  { path: '', component: LandingPage, layout: DefaultLayout },
  { path: '/:category', component: NotFound, layout: DefaultLayout },
  { path: '/item/:id', component: NotFound, layout: DefaultLayout },
  { path: '/brand/:id', component: NotFound, layout: DefaultLayout },
  { path: '/flashdeal', component: NotFound, layout: DefaultLayout },
  { path: '/user/signin', component: NotFound, layout: null },
  { path: '/vender/signin', component: NotFound, layout: null },
  { path: '/admin/signin', component: NotFound, layout: null },
];

const privateRoutes: IRoute[] = [
  { path: '/user', component: NotFound, layout: null },
  { path: '/user/setting', component: NotFound, layout: null },
  { path: '/user/profile', component: NotFound, layout: null },
  { path: '/user/cart', component: NotFound, layout: null },
  { path: '/user/order', component: NotFound, layout: null },
  { path: '/user/messages', component: NotFound, layout: null },

  { path: '/vender', component: NotFound, layout: null },
  { path: '/vender/setting', component: NotFound, layout: null },
  { path: '/vender/profile', component: NotFound, layout: null },
  { path: '/vender/products', component: NotFound, layout: null },
  { path: '/vender/orders', component: NotFound, layout: null },
  { path: '/vender/report', component: NotFound, layout: null },

  { path: '/admin', component: NotFound, layout: null },
  { path: '/admin/report', component: NotFound, layout: null },
  { path: '/admin/administrative', component: NotFound, layout: null },
  { path: '/admin/administrative/application', component: NotFound, layout: null },
  { path: '/admin/administrative/:item_id', component: NotFound, layout: null },
  { path: '/admin/administrative/:user_id', component: NotFound, layout: null },
  { path: '/admin/administrative/:vender_id', component: NotFound, layout: null },
];

export { publicRoutes, privateRoutes };
