import { Box, Flex, Image, List, Text } from '@chakra-ui/react';
import { IRoute, routes } from '../../../../AppRoutes/AppRoutes';
import { SideBarListItem } from './components/SidebarItem';
import { FiLogOut } from 'react-icons/fi';
import Logo from '@assets/mockLogo.svg';

const stylesheet = {
  routeList: {
    container: 'flex-col',
    sideCategory: 'py-[16px] text-xs opacity-80 font-normal',
    header: 'items-center justify-between',
  },
  sidebar: {
    headerContent: 'items-center',
    routesContent: 'flex-col gap-2',
    container:
      'min-w-[254px] h-screen bg-white justify-between py-[32px] pl-[32px] pr-[20px] flex-col flex-grow z-30 text-gray-dark',
    list: 'flex flex-col justify-start font-medium text-gray-500',
    topics: 'text-white text-xs font-medium leading-snug tracking-wide my-4',
    signOut:
      'flex items-center gap-2 items m-2 pl-2 rounded-md hover:bg-opacity-20 hover:bg-white cursor-pointer',
  },
};

const RouteList = () => {
  const filterHiddenMenus = (route: IRoute) => !route.hidden;

  return (
    <Flex className={stylesheet.routeList.container}>
      {routes.filter(filterHiddenMenus).map((route, index) => (
        <Box key={`route-${index}`}>
          <SideBarListItem route={route} />
        </Box>
      ))}
    </Flex>
  );
};

const SignOut = () => {
  return (
    <Flex onClick={() => {}} className={stylesheet.sidebar.signOut}>
      <FiLogOut size={24} style={{ marginBlock: 10 }} />
      <Text> Sair </Text>
    </Flex>
  );
};

export const Sidebar = () => {
  return (
    <Flex className={stylesheet.sidebar.container}>
      <Flex className={stylesheet.sidebar.routesContent}>
        <Flex className={stylesheet.sidebar.headerContent}>
          <Image src={Logo} />
        </Flex>
        <List className={`${stylesheet.sidebar.list}`}>
          <RouteList />
        </List>
      </Flex>
      <SignOut />
    </Flex>
  );
};
