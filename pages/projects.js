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
  const { projects } = data;

  useEffect(() => {
    dispatch({
      type: 'NAV_UPDATE_NAVSTATE',
      payload: 'projects',
    });
    Cookies.set('nav', JSON.stringify({ navstate: 'projects' }));
  }, [dispatch]);

  return (
    <Layout title="Projects">
      <Grid.Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text h1 size={40} color="white">
            Proyectos Web
          </Text>
          <Text h2 size={20} color="white">
            Estos son algunos de mis proyectos web que puedes visitar
          </Text>
        </div>
        <Spacer y={3} />

        <Grid sm={5} md={4} style={{ display: 'block' }}>
          {projects.map((project, index) => (
            <Link href={project.url} target="_blank" key={project.url}>
              <Grid xs={8} md={8}>
                <Card isPressable style={{ backgroundColor: '#e0e0e0' }}>
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
                    <Image
                      src={`/projects/${project.image}.png`}
                      priority={index === 0 ? 'true' : 'false'}
                      width={400}
                      height={350}
                      alt={project.title}
                      autoResize
                      quality={80}
                      layout="responsive"
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
              </Grid>
              <Spacer y={2} />
            </Link>
          ))}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
