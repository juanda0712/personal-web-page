import { Card, Grid, Spacer, Text } from '@nextui-org/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import { Store } from '../utils/Store';

export default function Projects() {
  const { dispatch } = useContext(Store);
  const { projects, desktop } = data;

  useEffect(() => {
    dispatch({
      type: 'NAV_UPDATE_NAVSTATE',
      payload: 'projects',
    });
    Cookies.set('nav', JSON.stringify({ navstate: 'projects' }));
  }, [dispatch]);

  return (
    <Layout title="Projects">
      <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text h1 size={40} color="white">
            Web Projects
          </Text>
          <Text h2 size={20} color="white">
            These are some of my most recent personal web projects that you can visit
          </Text>
        </div>
        <Spacer y={2} />
      <Grid.Container justify="center">
          {projects.map((project) => (
            <Grid  xs={12} md={6} key={project.url} justify='center'>
            <Link href={project.url} target="_blank" >
                <Card isPressable >
                  <Card.Header>
                    <div style={{display:'flex', flexDirection: 'column', maxWidth:400 }}>
                      <Text
                        h3
                        css={{
                          textGradient: '45deg, $yellow600 -20%, $red600 100%',
                        }}
                        weight="bold"
                      >
                        {project.title}
                      </Text>
                      <Text>{project.description}</Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Image
                      src={`/projects/${project.image}.png`}
                      width={360}
                      height={350}
                      alt={project.title}
                      autoResize
                      quality={80}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: 'flex-start' }}>
                    <Grid.Container justify="center" gap={0.5}>
                      {project.technologies.frontend.map((tec) => (
                        <Grid xs={3} sm={4} key={tec} justify="center">
                          <Image
                            src={`/frontEndSkills/${tec}.png`}
                            width={40}
                            height={45}
                            alt={tec}
                          ></Image>
                        </Grid>
                      ))}
                      {project.technologies.backend.map((tec) => (
                        <Grid xs={3} sm={4} key={tec} justify="center">
                          <Image
                            src={`/backEndSkills/${tec}.png`}
                            width={40}
                            height={45}
                            alt={tec}
                          ></Image>
                        </Grid>
                      ))}
                    </Grid.Container>
                  </Card.Footer>
                </Card>
              <Spacer y={2} />
            </Link>
            </Grid>
          ))}
      </Grid.Container>
      <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text h1 size={40} color="white">
            Desktop Projects
          </Text>
          <Text h2 size={20} color="white">
            These are some of my academic projects that you can watch
          </Text>
        </div>
        <Spacer y={2} />
        <Grid.Container justify="center">
          {desktop.map((project) => (
            <Grid  xs={12} md={6} key={project.title} justify='center'>
                <Card style={{ backgroundColor: '#e0e0e0', width: 450, height: 550 }}>
                  <Card.Header>
                    <div>
                      <Text
                        h3
                        css={{
                          textGradient: '45deg, $yellow600 -20%, $red600 100%',
                        }}
                        weight="bold"
                      >
                        {project.title}
                      </Text>
                      <Text>{project.description}</Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <video  height="300" controls >
                      <source src={`${project.src}.mp4`} type="video/mp4"/>
                    </video>
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: 'flex-start' }}>
                    <Grid.Container justify="center" gap={0.5}>
                      {project.language.map((tec) => (
                        <Grid xs={3} sm={4} key={tec} justify="center">
                          <Image
                            src={`/languages/${tec}.png`}
                            width={55}
                            height={60}
                            alt={tec}
                          ></Image>
                        </Grid>
                      ))}
                    </Grid.Container>
                  </Card.Footer>
                </Card>
            </Grid>
          ))}
      </Grid.Container>
    </Layout>
  );
}
