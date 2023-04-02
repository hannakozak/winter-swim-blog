import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={10} color='#2c85ba' />
      <Component {...pageProps} />
    </>
  );
}
