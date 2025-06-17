import { AuthLayout } from '../components';
import { Login, ResetPassword, SignUp } from '../pages';
import { ReactNode } from 'react';
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

export interface IRoute {
  element: ReactNode;
  hidden?: boolean;
  internalRoutes?: Array<IRoute>;
  path: string;
}

export const routes: Array<IRoute> = [
  {
    element: <Navigate to='/' />,
    path: '*',
    internalRoutes: [],
  },
  {
    element: <Login />,
    path: '/',
    internalRoutes: [],
  },
  {
    element: <SignUp />,
    path: '/signup',
    internalRoutes: [],
  },
  {
    element: <ResetPassword />,
    path: '/reset-password',
    internalRoutes: [],
  },
];

export const AuthRoutes = () => {
  const authRoutes = routes.map((route) => {
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
    createRoutesFromElements(
      <Route element={<AuthLayout />}>{authRoutes}</Route>
    )
  );
};
