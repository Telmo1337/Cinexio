import { createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Accent color */
  primaryColor: 'violet',
  
  /** Base colors */
  black: '#0f0f14',
  white: '#ffffff',

  colors: {
    /** Mantine default violet (podes ajustar se quiseres) */
    violet: [
      '#f5f3ff',
      '#ede9fe',
      '#ddd6fe',
      '#c4b5fd',
      '#a78bfa',
      '#8b5cf6',
      '#7c3aed',
      '#6d28d9',
      '#5b21b6',
      '#4c1d95',
    ],

    /** Neutral gray scale */
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
  },

  fontFamily: 'Inter, system-ui, sans-serif',

  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
  },

  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(0,0,0,0.12)',
  },

  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
  },

  components: {
    NavLink: {
        defaultProps:{
            c: 'violet'
        }
    },
     Text: {
        defaultProps:{
            c: 'violet'
        }
    }
  }

});
