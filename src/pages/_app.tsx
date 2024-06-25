import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Favicon from '../../public/favicon.svg';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;