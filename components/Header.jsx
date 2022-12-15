import { Button, Navbar, Text, Link } from '@nextui-org/react';
import { useState } from 'react';

export const Header = () => {
  const [navstate, setNavState] = useState('home');

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
        {navstate == 'home' ? (
          <Navbar.Link href="#" color="inherit" isActive>
            Página de Inicio
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="#"
            color="inherit"
            onClick={() => setNavState('home')}
          >
            Página de Inicio
          </Navbar.Link>
        )}
        {navstate == 'projects' ? (
          <Navbar.Link href="projects" isActive color="inherit">
            Proyectos Web
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="projects"
            color="inherit"
            onClick={() => setNavState('projects')}
          >
            Proyectos Web
          </Navbar.Link>
        )}
        {navstate == 'cv' ? (
          <Navbar.Link href="curriculum" isActive color="inherit">
            CV
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="curriculum"
            color="inherit"
            onClick={() => setNavState('cv')}
          >
            CV
          </Navbar.Link>
        )}
      </Navbar.Content>
    </Navbar>
  );
};
