import { Container } from '@chakra-ui/react';
import { Sidebar } from './components';
import { Outlet } from 'react-router-dom';

const stylesheet = {
  layoutDiv: 'min-h-screen w-full font-sans bg-background font-sans',
  main: 'flex w-full h-screen overflow-hidden m-auto',
  container: 'max-w-full h-full p-2 md:ml-10 overflow-auto',
};

export const Layout = () => {
  return (
    <div className={stylesheet.layoutDiv}>
      <main className={stylesheet.main}>
        <Sidebar />
        <Container className={stylesheet.container}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};
