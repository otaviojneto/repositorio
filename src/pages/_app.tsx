import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import TagManager from 'react-gtm-module';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-XXXXX' });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
