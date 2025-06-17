import { Link, useLocation } from 'react-router-dom';

import { Flex, ListItem, Text } from '@chakra-ui/react';
import { IRoute } from '../../../../../AppRoutes/AppRoutes';

const stylesheet = {
  listItem:
    'flex items-center gap-2 items m-1 pl-2 rounded-md hover:bg-opacity-20 hover:bg-white',
};

export const SideBarListItem = ({ route }: { route: IRoute }) => {
  const location = useLocation();
  const { path, icon, label } = route;

  const handleItemColorSelected = () => {
    return location.pathname === path ? 'bg-opacity-20 bg-green-500' : '';
  };

  return (
    <Link to={path} key={location.pathname}>
      <ListItem
        className={`${stylesheet.listItem} ${handleItemColorSelected()}`}
      >
        <Flex align='center'>{icon}</Flex>
        <Text>{label}</Text>
      </ListItem>
    </Link>
  );
};
