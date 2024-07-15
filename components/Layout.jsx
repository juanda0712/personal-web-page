import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? 'JRM - ' + title : 'JRM - Web'}</title>
        <meta name="description" content="Portafolio JRM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundColor: '#A3A5A7 ',
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
        <Spacer y={4} />

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
