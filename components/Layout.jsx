import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
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
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Header />
        <main
          style={{
            width: '100%',
            margin: 'auto',
            marginTop: '1rem',
            padding: '1rem 1rem',
          }}
        >
          {children}
        </main>
        <Spacer y={6} />

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
