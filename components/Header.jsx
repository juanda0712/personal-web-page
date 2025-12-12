import { Navbar, Text, Image, Dropdown } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Usamos useRouter para saber la ruta actual
import { icons } from './Icons';

export const Header = () => {
  const router = useRouter(); // Hook para obtener la ruta actual
  const currentPath = router.pathname; // ej: "/", "/projects", "/skills"

  const collapsePages = [
    { name: 'Home', slug: '/' },
    { name: 'Projects </>', slug: '/projects' }, // Asegúrate de usar / al inicio
    { name: 'Skills', slug: '/skills' },
    { name: 'Español CV', slug: '/cv' },
    { name: 'English CV', slug: '/en-cv' },
  ];

  const handleDropdownClick = (key) => {
    // Manejo seguro de rutas externas o internas
    if (key.includes('cv')) {
      window.open(`/${key}`, '_blank');
    }
  };

  // Función auxiliar para saber si el link está activo
  const isActive = (path) => currentPath === path;

  return (
    <Navbar variant="sticky">
      <Link href="/" passHref>
        <Navbar.Brand style={{ color: 'black', cursor: 'pointer' }}>
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
        {/* Enlace Home */}
        <Navbar.Link isActive={isActive('/')} as="div">
          <Link
            href="/"
            style={{
              color: 'black',
              fontWeight: isActive('/') ? 'bold' : 'normal',
              fontSize: isActive('/') ? 19 : 16,
            }}
          >
            Home
          </Link>
        </Navbar.Link>

        {/* Enlace Projects */}
        <Navbar.Link isActive={isActive('/projects')} as="div">
          <Link
            href="/projects"
            style={{
              color: 'black',
              fontWeight: isActive('/projects') ? 'bold' : 'normal',
              fontSize: isActive('/projects') ? 19 : 16,
            }}
          >
            Projects &lt;/&gt;
          </Link>
        </Navbar.Link>

        {/* Enlace Skills */}
        <Navbar.Link isActive={isActive('/skills')} as="div">
          <Link
            href="/skills"
            style={{
              color: 'black',
              fontWeight: isActive('/skills') ? 'bold' : 'normal',
              fontSize: isActive('/skills') ? 19 : 16,
            }}
          >
            Skills
          </Link>
        </Navbar.Link>

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
            aria-label="CV Options"
            onAction={(key) => handleDropdownClick(key)}
            css={{
              $$dropdownMenuWidth: '340px',
              $$dropdownItemHeight: '70px',
              '& .nextui-dropdown-item': {
                py: '$4',
                svg: { color: '$secondary', mr: '$4' },
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
              Inglés
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>

      <Navbar.Collapse disableAnimation>
        {collapsePages.map((page) => (
          <Navbar.CollapseItem key={page.slug}>
            <Link
              href={page.slug}
              style={{
                minWidth: '100%',
                color: 'black',
                display: 'block',
              }}
            >
              {page.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
