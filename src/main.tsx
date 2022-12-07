import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './component/App';
import GlobalStyle from './component/GlobalStyle';
import store from './store/store';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
