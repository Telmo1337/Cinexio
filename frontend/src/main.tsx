import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { theme } from './config/theme.ts'


import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </MantineProvider>
)





