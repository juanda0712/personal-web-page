import { Button, Navbar, Text, Link } from '@nextui-org/react';
import { useState } from 'react';

export const NavBar = () => {
  const [navstate, setNavState] = useState('home');

  return (
    <Navbar isBordered variant="sticky">
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
            Inicio
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="#"
            color="inherit"
            onClick={() => setNavState('home')}
          >
            Inicio
          </Navbar.Link>
        )}
        {navstate == 'projects' ? (
          <Navbar.Link href="#" isActive color="inherit">
            Proyectos
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="#"
            color="inherit"
            onClick={() => setNavState('projects')}
          >
            Proyectos
          </Navbar.Link>
        )}
        {navstate == 'cv' ? (
          <Navbar.Link href="#" isActive color="inherit">
            Curriculum
          </Navbar.Link>
        ) : (
          <Navbar.Link
            href="#"
            color="inherit"
            onClick={() => setNavState('cv')}
          >
            Curriculum
          </Navbar.Link>
        )}
      </Navbar.Content>
    </Navbar>
  );
};
