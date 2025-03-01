import React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/App.scss';
import '@/styles/boxicons/boxicons.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}
