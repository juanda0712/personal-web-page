import { Grid, Spacer, Text } from '@nextui-org/react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Gmail from '../public/SVGs/Gmail.svg';
import Github from '../public/SVGs/Github.svg';
import Linkedin from '../public/SVGs/Linkedin.svg';
import Whatsapp from '../public/SVGs/Whatsapp.svg';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

export default function Home() {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    dispatch({ type: 'NAV_UPDATE_NAVSTATE', payload: 'home' });
    Cookies.set('nav', JSON.stringify({ navstate: 'home' }));
  }, [dispatch]);

  const frontendSkills = ['javascript', 'react', 'nextjs'];
  const backendSkills = ['nodejs', 'aspdotnet2', 'mysql', 'mongodb'];
  const languajes = ['javascript', 'csharp', 'c++', 'java'];
  const management = ['git2', 'azureDevOps', 'docker'];
  const technicalSupport = [
    'technicalSupport',
    'cisco2',
    'virtualization',
    'office365',
    'linux',
  ];

  return (
    <Layout title="Home">
      <Grid.Container justify="center">
        <Grid sm={8} md={9}>
          <Grid
            sm={12}
            md={6}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'centers',
            }}
          >
            <div
              style={{
                display: 'block',
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              <Grid sm={12} md={12}>
                <div
                  style={{
                    borderRadius: '50%',
                    borderStyle: 'solid',
                    borderColor: 'white',
                    overflow: 'hidden',
                    width: '350px',
                    height: '300px',
                    textAlign: 'center',
                    margin: '0 auto',
                  }}
                >
                  <Image
                    src="/insta.jpg"
                    alt="Foto pagina web juan rodriguez montero"
                    width={350}
                    height={300}
                    quality={70}
                    priority={true}
                  />
                </div>
              </Grid>
              <Spacer y={1} />
              <Grid
                sm={12}
                md={6}
                justify="center"
                style={{
                  display: 'flex',
                  margin: '0 auto',
                }}
              >
                <Link
                  style={{ marginRight: '14px' }}
                  href="mailto:juan.rodriguez@jdrodriguez.dev, juanrm071299@gmail.com"
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
            </div>
          </Grid>
          <Grid
            sm={12}
            md={6}
            style={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            <Text h1 size={35} color="white">
              Hello, I’m Juan Daniel Rodríguez
            </Text>
            <Spacer y={0.3} />
            <Text size={16} color="white">
              I am a Computer Engineering student focused on software
              development, embedded systems, and IT infrastructure. I am
              committed to continuous learning and driven by how engineering can
              solve real-world challenges.
            </Text>
            <Spacer y={0.4} />
            <Text size={16} color="white">
              I also have experience automating business processes through SaaS
              solutions, helping organizations improve operational efficiency
              and streamline workflows.
            </Text>
            <Spacer y={0.4} />
            <Text size={16} color="white">
              Feel free to explore my work to learn more about my experience,
              projects, and technical skills. I’m open to new opportunities and
              collaborations.
            </Text>
          </Grid>
        </Grid>
      </Grid.Container>
      <Spacer y={4} />
      <Grid.Container justify="center">
        <Grid sm={10} md={7}>
          <Grid
            sm={12}
            md={6}
            style={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            <Link
              href="https://www.youtube.com/watch?v=ESwSDfuQTtY&ab_channel=Tecnol%C3%B3gicodeCostaRica"
              target="_black"
              rel="noreferrer"
            >
              <Image
                src="/ce.jpeg"
                alt="Foto pagina web juan rodriguez montero"
                width={200}
                height={200}
                style={{
                  borderRadius: '10%',
                  borderStyle: 'solid',
                }}
              />
            </Link>
          </Grid>
          <Spacer y={2} />
          <Grid
            sm={12}
            md={6}
            style={{
              display: 'block',
              textAlign: 'center',
            }}
          >
            <Link
              href="https://www.youtube.com/watch?v=H5Xot7s0IT8&ab_channel=Tecnol%C3%B3gicodeCostaRica"
              target="_black"
              rel="noreferrer"
            >
              <Image
                src="/tec2.png"
                alt="Foto pagina web juan rodriguez montero"
                width={200}
                height={200}
                style={{
                  borderRadius: '10%',
                  borderStyle: 'solid',
                }}
              />
            </Link>
          </Grid>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
