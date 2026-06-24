import { IRoute } from '@/Types';

import NotFound from '@/Pages/NotFound';
import LandingPage from '@/Pages/LandingPage';

import DefaultLayout from '@/Layouts/Default';
import VenderLayout from '@/Layouts/Vendor';
import AdminLayout from '@/Layouts/Admin';

import FrontUserSigninPage from '@/Pages/FrontUserSignIn';
import EndUserSigninPage from '@/Pages/EndUserSignin';
import SigninLayout from '@/Layouts/Signin';

const publicRoutes: IRoute[] = [
  { path: '', component: LandingPage, layout: DefaultLayout },
  { path: '/web', component: NotFound, layout: DefaultLayout },
  { path: '/:category', component: NotFound, layout: DefaultLayout },
  { path: '/item/:id', component: NotFound, layout: DefaultLayout },
  { path: '/brand/:id', component: NotFound, layout: DefaultLayout },
  { path: '/flashdeal', component: NotFound, layout: DefaultLayout },
  { path: '/front_user/signin', component: FrontUserSigninPage, layout: SigninLayout },
  { path: '/end_user/signin', component: EndUserSigninPage, layout: SigninLayout },
];

const privateRoutes: IRoute[] = [
  { path: '/user', component: NotFound, layout: null },
  { path: '/user/setting', component: NotFound, layout: null },
  { path: '/user/profile', component: NotFound, layout: null },
  { path: '/user/cart', component: NotFound, layout: null },
  { path: '/user/order', component: NotFound, layout: null },
  { path: '/user/message', component: NotFound, layout: null },
  { path: '/user/notification', component: NotFound, layout: null },

  { path: '/vender', component: NotFound, layout: VenderLayout },
  { path: '/vender/setting', component: NotFound, layout: VenderLayout },
  { path: '/vender/profile', component: NotFound, layout: VenderLayout },
  { path: '/vender/product', component: NotFound, layout: VenderLayout },
  { path: '/vender/order', component: NotFound, layout: VenderLayout },
  { path: '/vender/report', component: NotFound, layout: VenderLayout },
  { path: '/user/notification', component: NotFound, layout: null },

  { path: '/admin', component: NotFound, layout: AdminLayout },
  { path: '/admin/report', component: NotFound, layout: AdminLayout },
  { path: '/admin/administrative', component: NotFound, layout: AdminLayout },
  { path: '/admin/administrative/application', component: NotFound, layout: AdminLayout },
  { path: '/admin/administrative/:item_id', component: NotFound, layout: AdminLayout },
  { path: '/admin/administrative/:user_id', component: NotFound, layout: AdminLayout },
  { path: '/admin/administrative/:vender_id', component: NotFound, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
