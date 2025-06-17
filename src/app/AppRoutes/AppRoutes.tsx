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
import { Courses, Dashboard } from '../pages';

export interface IRoute {
  element: ReactNode;
  hidden?: boolean;
  icon?: ReactNode;
  internalRoutes?: Array<IRoute>;
  label?: string;
  path: string;
}
// TODO fazer internacionalização das rotas
export const routes: Array<IRoute> = [
  {
    element: <Navigate to='/' />,
    path: '*',
    internalRoutes: [],
  },
  {
    element: <Dashboard />,
    icon: <TfiDashboard size={24} style={{ marginBlock: 10 }} />,
    label: 'Dashboard',
    path: '/',
    internalRoutes: [],
  },
  {
    element: <Courses />,
    icon: <PiBooksLight size={24} style={{ marginBlock: 10 }} />,
    label: 'Cursos',
    path: '/courses',
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
