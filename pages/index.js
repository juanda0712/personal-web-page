import { Card, Grid, Spacer, Text } from '@nextui-org/react';
import Image from 'next/image';
import { Box } from '../components/Box';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  const frontendSkills = [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'nextjs',
    'react',
    'angular',
    'mui',
    'nextui',
    'bootstrap',
  ];
  const backendSkills = [
    'nodejs',
    'aspdotnet',
    'mysql',
    'posgresql',
    'mongodb',
  ];
  const languajes = ['javascript', 'java', 'python', 'csharp', 'c++', 'c'];
  const management = ['git', 'azureDevOps', 'jira', 'docker'];
  const technicalSupport = ['technicalSupport', 'cisco', 'virtualization'];

  return (
    <Layout>
      <Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
        <Grid.Container gap={2} justify="center">
          <Grid sm={10} md={7}>
            <Grid sm={12} md={6} alignItems="center">
              <div
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: '350px',
                  height: '300px',
                  textAlign: 'center',
                  margin: '0 auto',
                }}
              >
                <Image
                  src="/perfil.jpg"
                  alt="Foto pagina web juan rodriguez montero"
                  width={350}
                  height={300}
                  quality={70}
                />
              </div>
            </Grid>
            <Grid sm={12} md={6} style={{ display: 'block' }}>
              <Text>Hola Mundo! 👋, soy JuanDa.</Text>
              <Spacer y={0.6} />
              <Text>Apasionado de la tecnología desde que tengo memoria.</Text>
              <Spacer y={0.6} />
              <Text>
                Me considero una persona muy curiosa, buen aprendiz y fácil de
                trabajar.
              </Text>
              <Spacer y={0.6} />
              <Text>
                Mi tiempo completo lo dedico a estudiar la carrera de ingeniería
                en computadores en el Instituto Tecnológico de Costa Rica, a
                desarrollar FrontEnd y BackEnd y mi tiempo libre lo dedico a mis
                pasatiempos.
              </Text>
              <Spacer y={0.6} />
              <Text>
                Ajedrez ♟️ Video Juegos 🎮 Paseos por la montaña ⛰️ Gimnasio 💪
                Música 🥁
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
              <Text h2>&nbsp; Habilidades</Text>
            </Grid>
            <Grid sm={12} md={12} style={{ display: 'block' }}>
              <Text h3>FrontEnd</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {frontendSkills.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/frontEndSkills/${item}.png`}
                          width={80}
                          height={75}
                          alt={item}
                        />
                      </Card.Body>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3>BackEnd</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {backendSkills.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/backEndSkills/${item}.png`}
                          width={80}
                          height={75}
                          alt={item}
                        />
                      </Card.Body>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3>Lenguajes Conocidos</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {languajes.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/languages/${item}.png`}
                          width={80}
                          height={75}
                          alt={item}
                        />
                      </Card.Body>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3>Gestión</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {management.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/management/${item}.png`}
                          width={80}
                          height={75}
                          alt={item}
                        />
                      </Card.Body>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
              <Spacer y={3} />
              <Text h3>Technical Support</Text>
              <Spacer y={1} />
              <Grid.Container gap={1} justify="flex-start">
                {technicalSupport.map((item, index) => (
                  <Grid xs={3} sm={2} key={index}>
                    <Card>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={`/support/${item}.png`}
                          width={80}
                          height={75}
                          alt={item}
                        />
                      </Card.Body>
                    </Card>
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
