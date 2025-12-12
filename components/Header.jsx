import { Navbar, Text, Image, Dropdown } from '@nextui-org/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import { icons } from './Icons';

export const Header = () => {
  const { state } = useContext(Store);
  const { nav } = state;
  const { navstate } = nav;

  const collapsePages = [
    { name: 'Home', slug: '/' },
    { name: 'Projects </>', slug: 'projects' },
    { name: 'Skills', slug: 'skills' },
    { name: 'Español CV', slug: 'cv' },
    { name: 'English CV', slug: 'en-cv' },
  ];

  const handleDropdownClick = (key) => {
    window.open(`/${key}`, '_blank');
  };

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

      <Navbar.Toggle showIn="sm" />
      <Navbar.Content hideIn="sm" variant="underline">
        {navstate === 'home' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="/"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              Home
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link href="/" style={{ color: 'black', fontWeight: 'bold' }}>
              Home
            </Link>
          </Navbar.Link>
        )}
        {navstate === 'projects' ? (
          <Navbar.Link as="div" isActive>
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}
            >
              Projects &lt;/&gt;
            </Link>
          </Navbar.Link>
        ) : (
          <Navbar.Link as="div">
            <Link
              href="projects"
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Projects &lt;/&gt;
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
        <Dropdown isBordered>
          <Navbar.Item>
            <Dropdown.Button
              auto
              light
              css={{
                px: 0,
                dflex: 'center',
                svg: { pe: 'none' },
              }}
              ripple={false}
            >
              Curriculum
            </Dropdown.Button>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="ACME features"
            onAction={(key) => handleDropdownClick(key)}
            css={{
              $$dropdownMenuWidth: '340px',
              $$dropdownItemHeight: '70px',
              '& .nextui-dropdown-item': {
                py: '$4',
                // dropdown item left icon
                svg: {
                  color: '$secondary',
                  mr: '$4',
                },
                // dropdown item title
                '& .nextui-dropdown-item-content': {
                  w: '100%',
                  fontWeight: '$semibold',
                },
              },
            }}
          >
            <Dropdown.Item
              key="cv"
              showFullDescription
              description="Visualiza mi historial laboral, educación y habilidades en español."
              icon={icons.spainFlag}
            >
              Español
            </Dropdown.Item>
            <Dropdown.Item
              key="en-cv"
              showFullDescription
              description="Explore my work history, education, and skills in English."
              icon={icons.uKFlag}
            >
              Ingles
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
