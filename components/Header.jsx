import { Navbar, Text, Image } from '@nextui-org/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';

export const Header = () => {
  const { state } = useContext(Store);
  const { nav } = state;
  const { navstate } = nav;
  const collapsePages = [
    { name: 'Inicio', slug: '/' },
    { name: 'Proyectos </>', slug: 'projects' },
    { name: 'Skills', slug: 'skills' },
    { name: 'CV', slug: 'cv' },
  ];

  return (
    <Navbar variant="sticky">
      <Link href="/">
        <Navbar.Brand style={{ color: 'black' }}>
          <Image
            width={110}
            height={30}
            src="/logo.png"
            alt="Logo de JRM"
            objectFit="cover"
          />
          <Text color="inherit" size={19}>
            &nbsp; | &nbsp;
          </Text>
          <Text b color="inherit" size={19.5}>
            Juan Rodríguez Montero
          </Text>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle showIn="xs" />
      <Navbar.Content hideIn="xs" variant="underline">
        {navstate === 'home' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="/"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              Inicio
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="/" style={{ color: 'black', fontWeight: 'bold' }}>
              Inicio
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'projects' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              Proyectos &lt;/&gt;
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Proyectos &lt;/&gt;
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'skills' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="skills"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              Skills
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="skills" style={{ color: 'black', fontWeight: 'bold' }}>
              Skills
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'cv' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="cv"
              target="_blank"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              CV
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link
              target="_blank"
              href="cv"
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
