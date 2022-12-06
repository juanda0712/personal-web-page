import Head from 'next/head';
import { Box } from './Box.jsx';
import { NavBar } from './Navbar.jsx';

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
          maxW: '100%',
        }}
      >
        <header>
          <NavBar />
        </header>
        {children}
      </Box>
    </>
  );
}
