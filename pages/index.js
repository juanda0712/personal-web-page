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
    'tailwind',
    'mui',
    'nextui',
  ];
  const backendSkills = ['nodejs', 'aspdotnet2', 'mysql', 'mongodb'];
  const languajes = ['javascript', 'csharp','c++', 'java', 'python'];
  const management = ['git2', 'azureDevOps2', 'jira2', 'docker2'];
  const technicalSupport = ['technicalSupport', 'cisco2', 'virtualization'];

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
                I consider myself a very curious person and a quick learner.
                with a great interest in working on demanding and
                new projects
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                I spend my time studying computer engineering at Instituto 
                Tecnologico de Costa Rica, to develop 
                FrontEnd & BackEnd and my free time is dedicaded to my hobbies
              </Text>
              <Spacer y={0.6} />
              <Text size={16} color="white">
                Chess ♟️ Video Games 🎮 Anime 📺 Gym 💪 Music 🥁
                Hiking⛰️
              </Text>
            </Grid>
          </Grid>
          <Grid sm={10} md={7} style={{ marginTop: '45px', display: 'block' }}>
            <Grid sm={12} md={12} style={{ display: 'flex' }}>
              <Image
                src="/code.png"
                alt="habilidades de desarrollo de juan rodriguez montero"
                width={50}
                height={50}
              ></Image>
              <Text h2 color="white">
                &nbsp; SKILLS
              </Text>
            </Grid>
            <Grid sm={12} md={12} style={{ display: 'block' }}>
              <Text h3 color="white">
                FrontEnd
              </Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {frontendSkills.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Image
                      src={`/frontEndSkills/${item}.png`}
                      width={65}
                      height={65}
                      alt={item}
                    />
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3 color="white">
                BackEnd
              </Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {backendSkills.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Image
                      src={`/backEndSkills/${item}.png`}
                      width={65}
                      height={65}
                      alt={item}
                    />
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3 color="white">
                Used Languages
              </Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {languajes.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Image
                      src={`/languages/${item}.png`}
                      width={65}
                      height={65}
                      alt={item}
                    />
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3 color="white">
                Management
              </Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {management.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Image
                      src={`/management/${item}.png`}
                      width={65}
                      height={65}
                      alt={item}
                    />
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3 color="white">
                Technical Support
              </Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {technicalSupport.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Image
                      src={`/support/${item}.png`}
                      width={65}
                      height={65}
                      alt={item}
                    />
                  </Grid>
                ))}
              </Grid.Container>
            </Grid>
          </Grid>
        </Grid.Container>
      </Box>
    </Layout>
  );
}
