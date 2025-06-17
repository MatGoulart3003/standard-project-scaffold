import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import './index.css';
import './libs/i18n.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider cssVarsRoot='#app'>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
