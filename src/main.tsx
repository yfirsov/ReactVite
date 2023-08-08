import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { worker } from './mocks/browser.ts';
import { setupStore } from './store.ts';

const store = setupStore();
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
console.log(import.meta.env.DEV);
console.log(import.meta.env.PROD);
worker
  .start({
    quiet: true,
    serviceWorker: {
      url: `${
        import.meta.env.PROD ? import.meta.env.BASE_URL : ''
      }/mockServiceWorker.js`,
    },
  })
  .then(() => {
    const rootNode = ReactDOM.createRoot(document.getElementById('root')!);

    return rootNode.render(
      <React.StrictMode>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </React.StrictMode>,
    );
  })
  .catch(console.error);
