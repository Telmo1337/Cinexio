
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './index.css';

import App from './App';
import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </MantineProvider>
);
