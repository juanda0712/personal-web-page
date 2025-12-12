import { Spacer } from '@nextui-org/react';
import Head from 'next/head';
// Asegúrate de importar tu Footer si lo tienes, o comenta la línea
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
          backgroundColor: '#A3A5A7', // Corregido: espacio eliminado
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
            maxWidth: '1200px', // Añadido para que no se estire demasiado en pantallas gigantes
            margin: '0 auto',
            padding: '2rem 1rem',
            flex: 1,
          }}
        >
          {children}
        </main>

        {/* Renderiza el Footer solo si el componente existe */}
        {typeof Footer !== 'undefined' ? (
          <footer>
            <Footer />
          </footer>
        ) : (
          <Spacer y={2} />
        )}
      </div>
    </>
  );
}
