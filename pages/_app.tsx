import React from 'react';
import '../src/index.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
