import { IRoute } from '@/Types';

import NotFound from '@/Pages/NotFound';
import LandingPage from '@/Pages/LandingPage';

import DefaultLayout from '@/Layouts/Default';

const publicRoutes: IRoute[] = [
  { path: '*', component: LandingPage, layout: DefaultLayout },
  { path: '/admin/signin', component: NotFound, layout: null },
];

const privateRoutes: IRoute[] = [];

export { publicRoutes, privateRoutes };
