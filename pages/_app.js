import * as React from 'react';
import { cache } from '../shared/emotion';
import { CacheProvider } from '@emotion/react';

function App(props) {
  const { Component, pageProps } = props;

  return (
    <CacheProvider value={cache}>
        <Component {...pageProps} />
    </CacheProvider>
  );
}

export default App;