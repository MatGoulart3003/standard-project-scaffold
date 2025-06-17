import { RouterProvider } from 'react-router-dom';
import { AppRoutes } from './app/AppRoutes/AppRoutes';
import { AuthRoutes } from './auth/AuthRoutes/AuthRoutes';

const App = () => {
  return <RouterProvider router={AppRoutes()} />;
  // return <RouterProvider router={AuthRoutes()} />;
};

export default App;
