import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@mantine/core/styles.css';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from './config/theme.ts';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.tsx';


createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <StrictMode>
       <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
       </AuthProvider>
    </StrictMode>
  </MantineProvider>
);
