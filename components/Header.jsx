import { Navbar, Text } from '@nextui-org/react';
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
          <Navbar.Link href="/" color="inherit" isActive>
            Página de Inicio
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/" color="inherit">
            Página de Inicio
          </Navbar.Link>
        )}
        {navstate === 'projects' ? (
          <Navbar.Link href="projects" isActive color="inherit">
            Proyectos Web
          </Navbar.Link>
        ) : (
          <Navbar.Link href="projects" color="inherit">
            Proyectos Web
          </Navbar.Link>
        )}
        {navstate === 'cv' ? (
          <Navbar.Link href="curriculum" isActive color="inherit">
            CV
          </Navbar.Link>
        ) : (
          <Navbar.Link href="curriculum" color="inherit">
            CV
          </Navbar.Link>
        )}
      </Navbar.Content>
    </Navbar>
  );
};
