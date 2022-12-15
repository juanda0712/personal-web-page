import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
import { Box } from './Box.jsx';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

export default function Layout({ children, title = 'JRM Portfolio' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="This page is a Portfolio of Juan Rodriguez Montero"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        css={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        {children}
        <Spacer y={5} />
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
