import { IRoute } from '@/Types';

import NotFound from '@/Pages/NotFound';
import LandingPage from '@/Pages/LandingPage';

import DefaultLayout from '@/Layouts/Default';
import VenderLayout from '@/Layouts/Vendor';
import AdminLayout from '@/Layouts/Admin';

import CustomerSigninPage from '@/Pages/CustomerSignIn';
import CustomerSignupPage from '@/Pages/CustomerSignUp';
import VenderSigninPage from '@/Pages/VenderSignIn';  
import SupportSignInPage from '@/Pages/SupportSignIn';
import SigninLayout from '@/Layouts/Signin';

const publicRoutes: IRoute[] = [
  { path: '', component: LandingPage, layout: DefaultLayout },
  { path: '/web', component: NotFound, layout: DefaultLayout },
  { path: '/:category', component: NotFound, layout: DefaultLayout },
  { path: '/item/:id', component: NotFound, layout: DefaultLayout },
  { path: '/brand/:id', component: NotFound, layout: DefaultLayout },
  { path: '/flashdeal', component: NotFound, layout: DefaultLayout },
  { path: '/customer/signin', component: CustomerSigninPage, layout: SigninLayout },
  { path: '/customer/signup', component: CustomerSignupPage, layout: SigninLayout },
  { path: '/vender/signin', component: VenderSigninPage, layout: SigninLayout },
  { path: '/vender/application', component: CustomerSignupPage, layout: SigninLayout },
  { path: '/support/signin', component: SupportSignInPage, layout: SigninLayout },
];

const privateRoutes: IRoute[] = [
  { path: '/user', component: NotFound, layout: null },
  { path: '/user/setting', component: NotFound, layout: null },
  { path: '/user/profile', component: NotFound, layout: null },
  { path: '/user/cart', component: NotFound, layout: null },
  { path: '/user/order', component: NotFound, layout: null },
  { path: '/user/message', component: NotFound, layout: null },
  { path: '/user/notification', component: NotFound, layout: null },

  { path: '/shop', component: NotFound, layout: VenderLayout },
  { path: '/shop/setting', component: NotFound, layout: VenderLayout },
  { path: '/shop/profile', component: NotFound, layout: VenderLayout },
  { path: '/shop/product', component: NotFound, layout: VenderLayout },
  { path: '/shop/order', component: NotFound, layout: VenderLayout },
  { path: '/shop/report', component: NotFound, layout: VenderLayout },
  { path: '/shop/notification', component: NotFound, layout: null },

  { path: '/support', component: NotFound, layout: AdminLayout },
  { path: '/support/report', component: NotFound, layout: AdminLayout },
  { path: '/support/report/:report_id', component: NotFound, layout: AdminLayout },
  { path: '/support/chat', component: NotFound, layout: AdminLayout },
  { path: '/support/chat/:user_id', component: NotFound, layout: AdminLayout },

  { path: '/admin', component: NotFound, layout: AdminLayout },
  { path: '/admin/report', component: NotFound, layout: AdminLayout },
  { path: '/admin/report/:report_id', component: NotFound, layout: AdminLayout },
  { path: '/admin', component: NotFound, layout: AdminLayout },
  { path: '/admin/application', component: NotFound, layout: AdminLayout },
  { path: '/admin/application/:application_id', component: NotFound, layout: AdminLayout },
  { path: '/admin/:item_id', component: NotFound, layout: AdminLayout },
  { path: '/admin/:user_id', component: NotFound, layout: AdminLayout },
  { path: '/admin/:vender_id', component: NotFound, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
