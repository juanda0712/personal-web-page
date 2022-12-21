import { Navbar, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';

export const Header = () => {
  const { state } = useContext(Store);
  const { nav } = state;
  const { navstate } = nav;
  const collapsePages = [
    { name: 'Página de Inicio', slug: '/' },
    { name: 'Proyectos Web', slug: 'projects' },
    { name: 'CV', slug: 'curriculum' },
  ];

  return (
    <Navbar variant="sticky">
      <Link href="/">
        <Navbar.Brand style={{ color: 'black' }}>
          <Text b color="inherit" weight="bold" size={22}>
            JRM
          </Text>
          <Text color="inherit" size={17.5}>
            &nbsp; | &nbsp;
          </Text>
          <Text b color="inherit" size={17.5}>
            Juan Rodríguez Montero
          </Text>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs" variant="underline">
        {navstate === 'home' ? (
          <Navbar.Link as="div" isActive>
            <Link href="/" style={{ color: 'black', fontWeight: 'bold' }}>
              Página de Inicio
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="/" style={{ color: 'black', fontWeight: 'bold' }}>
              Página de Inicio
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'projects' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Proyectos
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Proyectos
            </Link>
          </Navbar.Link>
        )}

        {navstate === 'cv' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="curriculum"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              CV
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link
              href="curriculum"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              CV
            </Link>
          </Navbar.Link>
        )}
      </Navbar.Content>

      <Navbar.Collapse disableAnimation>
        {collapsePages.map((page) => (
          <Navbar.CollapseItem key={page.slug}>
            <Link
              css={{
                minWidth: '100%',
              }}
              style={{
                color: 'black',
              }}
              href={page.slug}
            >
              {page.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
