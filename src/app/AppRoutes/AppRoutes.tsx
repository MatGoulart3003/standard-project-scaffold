import { ReactNode } from 'react';
import { PiBooksLight } from 'react-icons/pi';
import { TfiDashboard } from 'react-icons/tfi';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import { Layout } from '../components';
import { FirstPage, SecondPage } from '../pages';
import { ICON_SIZE_24 } from '@utils/iconSizes';

export interface IRoute {
  element: ReactNode;
  hidden?: boolean;
  icon?: ReactNode;
  internalRoutes?: Array<IRoute>;
  label?: string;
  path: string;
}

export const routes: Array<IRoute> = [
  {
    element: <Navigate to='/' />,
    path: '*',
    internalRoutes: [],
  },
  {
    element: <FirstPage />,
    icon: <TfiDashboard size={ICON_SIZE_24} style={{ marginBlock: 10 }} />,
    label: 'FirstPage',
    path: '/',
    internalRoutes: [],
  },
  {
    element: <SecondPage />,
    icon: <PiBooksLight size={ICON_SIZE_24} style={{ marginBlock: 10 }} />,
    label: 'SecondPage',
    path: '/second-page',
    internalRoutes: [],
  },
];

export const AppRoutes = () => {
  const appRoutes = routes.map((route) => {
    return route?.internalRoutes?.length ? (
      route.internalRoutes.map((internalRoute) => (
        <Route
          key={internalRoute.path}
          path={internalRoute.path}
          element={internalRoute.element}
        />
      ))
    ) : (
      <Route key={route.path} path={route.path} element={route.element} />
    );
  });

  return createBrowserRouter(
    createRoutesFromElements(<Route element={<Layout />}>{appRoutes}</Route>)
  );
};
