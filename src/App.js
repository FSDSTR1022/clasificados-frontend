import './assets/css/App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

import MainPage from './Layout/MainPage/MainPage'


function App() {
  return (
		<ChakraProvider>

			<MainPage />
		
		</ChakraProvider>

  );
}

export default App;
