import { Button, Navbar, Text, Link, Grid } from '@nextui-org/react';
import Gmail from '../public/SVGs/Gmail.svg';
import Github from '../public/SVGs/Github.svg';
import Linkedin from '../public/SVGs/Linkedin.svg';
import Whatsapp from '../public/SVGs/Whatsapp.svg';

export const Footer = () => {
  return (
    <Grid.Container
      gap={2}
      justify="center"
      style={{ backgroundColor: '#B4B8BD' }}
    >
      <Grid sm={12} md={12} justify="center">
        <Text style={{ textAlign: 'center' }}>
          Si tiene interes en trabajar conmigo en sus proyectos, no dude en
          contactarme
        </Text>
      </Grid>
      <Grid sm={12} md={12} justify="center" style={{ display: 'flex' }}>
        <Link
          style={{ marginRight: '14px' }}
          href="mailto:juanrm071299@gmail.com,juan.rodriguez@estudiantec.cr"
        >
          <Gmail viewBox="0 0 45 45" />
        </Link>
        <Link
          style={{ marginRight: '14px' }}
          href="https://github.com/juanda0712"
          target="_black"
          rel="noreferrer"
        >
          <Github viewBox="0 0 45 45" />
        </Link>
        <Link
          style={{ marginRight: '14px' }}
          href="https://www.linkedin.com/in/juanrodriguez07"
          target="_black"
          rel="noreferrer"
        >
          <Linkedin viewBox="0 0 45 45" />
        </Link>
        <Link
          style={{ marginRight: '14px' }}
          href="https://wa.me/50660865957"
          target="_black"
          rel="noreferrer"
        >
          <Whatsapp viewBox="0 0 45 45" />
        </Link>
      </Grid>
      <Grid sm={12} md={12} justify="center">
        <Text>© 2022 Juan Rodríguez Montero</Text>
      </Grid>
    </Grid.Container>
  );
};
