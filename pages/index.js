import { Card, Grid, Spacer, Text } from '@nextui-org/react';
import Image from 'next/image';
import { Box } from '../components/Box';
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

  const frontendSkills = [
    'javascript',
    'react',
    'nextjs',
  ];
  const backendSkills = ['nodejs', 'aspdotnet2', 'mysql', 'mongodb'];
  const languajes = ['javascript', 'csharp','c++', 'java'];
  const management = ['git2', 'azureDevOps', 'docker'];
  const technicalSupport = ['technicalSupport', 'cisco2', 'virtualization','office365', 'linux'];

  return (
    <Layout title="Home">
      <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
        <Grid.Container justify="center">
          <Grid sm={10} md={7}>
            <Grid
              sm={12}
              md={6}
              alignItems="center"
              justify="center"
              style={{
                display: 'block',
                alignItems: 'center',
                margin: '0 auto',
              }}
            >
              <Grid sm={12} md={12} alignItems="center">
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
                    src="/perfil2.jpeg"
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
                Hello World! 👋, I&apos;m JuanDa
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                Passionate about technology since I can remember
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                Very curious person and a quick learner.
                with a great interest in working on demanding and
                new projects that have a positive impact on productivity
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                Currently, I spend my time developing software, learning about the software business 
                and how to automate business processes, studying computer engineering and my free time is dedicaded to my hobbies
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                Chess ♟️ Video Games 🎮 Anime 📺 Music 🎵
                Hiking ⛰️
              </Text>
            </Grid>
          </Grid>
        </Grid.Container>
      </Box>
    </Layout>
  );
}
