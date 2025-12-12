import { Grid, Spacer, Text, Button } from '@nextui-org/react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Gmail from '../public/SVGs/Gmail.svg';
import Github from '../public/SVGs/Github.svg';
import Linkedin from '../public/SVGs/Linkedin.svg';
import Whatsapp from '../public/SVGs/Whatsapp.svg';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // <-- IMPORTADO PARA LA CORRECCIÓN DE HIDRATACIÓN

export default function Home() {
  const [isClient, setIsClient] = useState(false); // <-- 1. ESTADO DE MONTAJE

  useEffect(() => {
    setIsClient(true); // <-- 2. SE ESTABLECE EN 'TRUE' DESPUÉS DEL MONTAJE EN EL CLIENTE
  }, []);

  return (
    <Layout title="Home">
      {/* 3. RENDERIZACIÓN CONDICIONAL: Solo renderiza el contenido complejo en el cliente. */}
      {isClient ? (
        <>
          <Grid.Container justify="center" gap={2}>
            {/* SECCIÓN 1: FOTO Y REDES */}
            <Grid xs={12} md={5} direction="column" alignItems="center">
              <div
                style={{
                  borderRadius: '50%',
                  border: '2px solid white',
                  overflow: 'hidden',
                  width: '300px',
                  height: '300px',
                  marginBottom: '20px',
                  backgroundColor: '#9EA3B1',
                }}
              >
                <Image
                  src="/perfil/perfil.png"
                  alt="Juan Daniel Rodríguez"
                  width={300}
                  height={300}
                  quality={85}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                <Link
                  href="mailto:juan.rodriguez@jdrodriguez.dev"
                  aria-label="Gmail"
                >
                  <Gmail viewBox="0 0 45 45" width={40} height={40} />
                </Link>
                <Link
                  href="https://github.com/juanda0712"
                  target="_blank"
                  aria-label="Github"
                >
                  <Github viewBox="0 0 45 45" width={40} height={40} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/juanrodriguez07"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin viewBox="0 0 45 45" width={40} height={40} />
                </Link>
                <Link
                  href="https://wa.me/50660865957"
                  target="_blank"
                  aria-label="WhatsApp"
                >
                  <Whatsapp viewBox="0 0 45 45" width={40} height={40} />
                </Link>
              </div>
            </Grid>

            {/* SECCIÓN 2: INTRODUCCIÓN */}
            <Grid xs={12} md={7} direction="column" justify="center">
              <Text
                h1
                size={40}
                color="white"
                css={{ textAlign: 'center', '@md': { textAlign: 'left' } }}
              >
                Hello, I’m Juan Daniel Rodríguez
              </Text>

              <Text
                size={18}
                color="#e0e0e0"
                css={{ textAlign: 'center', '@md': { textAlign: 'left' } }}
              >
                Computer Engineer passionate about building reliable and
                scalable solutions across different layers of technology — from
                low-level programming and hardware interaction to modern web
                applications and cloud-based platforms.
              </Text>

              <Spacer y={1} />

              <Text
                size={18}
                color="#e0e0e0"
                css={{ textAlign: 'center', '@md': { textAlign: 'left' } }}
              >
                I enjoy working on real-time systems, automation, and embedded
                development, but I also design full-stack applications and SaaS
                tools that solve practical problems with clean architectures and
                efficient workflows. My goal is to create software that is
                intuitive, maintainable, and robust—no matter the layer.
              </Text>
            </Grid>
          </Grid.Container>

          <Spacer y={4} />

          {/* SECCIÓN 3: INGENIERÍA Y PROYECTOS */}
          <Grid.Container
            justify="center"
            css={{
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '15px',
              p: '$10',
            }}
          >
            <Grid xs={12} md={8} direction="column" alignItems="center">
              <Text h2 color="white" css={{ textAlign: 'center' }}>
                Computer Engineering & Projects
              </Text>
              <Text
                size={18}
                color="white"
                css={{ textAlign: 'center', maxWidth: '800px' }}
              >
                My career in <b>Computer Engineering</b> combines the best of
                both worlds: Computer Science (Software) and Electrical
                Engineering (Hardware). This allows me to understand and build
                systems from the circuit level up to high-level applications.
              </Text>
              <Spacer y={1.5} />
              <Link href="/projects" passHref>
                <Button
                  as="a"
                  bordered
                  color="secondary"
                  auto
                  size="lg"
                  css={{
                    color: 'white',
                    fontWeight: '$semibold',
                    '&:hover': {
                      background: '$secondary',
                      color: '$black',
                    },
                  }}
                >
                  View My Projects
                </Button>
              </Link>
            </Grid>
          </Grid.Container>

          <Spacer y={4} />

          {/* SECCIÓN 4: RESPALDO INSTITUCIONAL */}
          <Grid.Container justify="center" gap={2}>
            <Grid xs={12} justify="center">
              <Text h3 color="white">
                Institutional Background
              </Text>
            </Grid>

            <Grid
              xs={12}
              sm={6}
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Link
                href="https://www.youtube.com/watch?v=ESwSDfuQTtY"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/ce.jpeg"
                  alt="Computer Engineering at TEC"
                  width={250}
                  height={200}
                  style={{
                    borderRadius: '15px',
                    border: '2px solid white',
                    objectFit: 'cover',
                  }}
                />
              </Link>
              <Text size={14} color="white" i css={{ mt: '$5' }}>
                About my Degree
              </Text>
            </Grid>

            <Grid
              xs={12}
              sm={6}
              justify="center"
              direction="column"
              alignItems="center"
            >
              <Link
                href="https://www.youtube.com/watch?v=H5Xot7s0IT8"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/tec2.png"
                  alt="Tecnológico de Costa Rica Info"
                  width={250}
                  height={200}
                  style={{
                    borderRadius: '15px',
                    border: '2px solid white',
                    objectFit: 'contain',
                    background: 'white',
                  }}
                />
              </Link>
              <Text size={14} color="white" i css={{ mt: '$5' }}>
                About my University (TEC)
              </Text>
            </Grid>
          </Grid.Container>
        </>
      ) : (
        // Renderiza un contenedor simple en el servidor para evitar el error de hidratación
        // Se puede añadir un esqueleto básico aquí si se quiere evitar un salto de layout (CLS).
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text color="white" h3>
            Loading...
          </Text>
        </div>
      )}
    </Layout>
  );
}
