import { Navbar, Text } from '@nextui-org/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';

export const Header = () => {
  const { state } = useContext(Store);
  const { nav } = state;
  const { navstate } = nav;

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
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
      <Navbar.Content hideIn="xs" variant="underline">
        {navstate === 'home' ? (
          <Navbar.Link as="div" isActive>
            <Link href="/" style={{ color: 'black' }}>
              Página de Inicio
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="/" style={{ color: 'black' }}>
              Página de Inicio
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'projects' ? (
          <Navbar.Link as="div" isActive>
            <Link href="projects" style={{ color: 'black' }}>
              Proyectos Web
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="projects" style={{ color: 'black' }}>
              Proyectos Web
            </Link>
          </Navbar.Link>
        )}

        {navstate === 'cv' ? (
          <Navbar.Link as="div" isActive>
            <Link href="curriculum" style={{ color: 'black' }}>
              CV
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="curriculum" style={{ color: 'black' }}>
              CV
            </Link>
          </Navbar.Link>
        )}
      </Navbar.Content>
    </Navbar>
  );
};
