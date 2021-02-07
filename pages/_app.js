import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

// css
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <Page>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
