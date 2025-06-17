import { Flex, Image } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const stylesheet = {
  container: 'w-screen h-screen overflow-hidden font-sans',
  leftSide: 'w-2/4 justify-center h-full',
  rightSide: 'w-2/4',
  background: 'absolute left-[50%] inset-0 w-2/4 h-full',
  wallpaper:
    'z-40 h-[80vh] w-[86vh] relative mid-height:top-28 mid-height:right-40 top-16 right-16',
};

export const AuthLayout = () => {
  return (
    <Flex className={stylesheet.container}>
      <Flex className={stylesheet.leftSide}>
        <Outlet></Outlet>
      </Flex>
      <Flex className={stylesheet.rightSide}>
        {/* <Image className={stylesheet.background} src={}></Image> */}
        {/* <Image className={stylesheet.wallpaper} src={} /> */}
      </Flex>
    </Flex>
  );
};
