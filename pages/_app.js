import { SessionProvider } from 'next-auth/react';
import nProgress from 'nprogress';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  nProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => nProgress.start());
  Router.events.on('routeChangeComplete', () => nProgress.done());
  Router.events.on('routeChangeError', () => nProgress.done());

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
