import { Card, Grid, Text } from '@nextui-org/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { Box } from '../components/Box';
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
    <Layout>
      <Box css={{ px: '$12', mt: '$10', '@xsMax': { px: '$10' } }}>
        <Grid.Container gap={2} justify="center">
          <Grid sm={5} md={4} style={{ display: 'block' }}>
            {projects.map((project, index) => (
              <Link href={project.url} target="_blank" key={project.url}>
                <Grid xs={8} md={8}>
                  <Card isPressable style={{ backgroundColor: '#b4b8bd' }}>
                    <Card.Header>
                      <div>
                        <Text
                          h2
                          css={{
                            textGradient:
                              '45deg, $yellow600 -20%, $red600 100%',
                          }}
                          weight="bold"
                        >
                          {project.title}
                        </Text>
                        <Text>{project.description}</Text>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Image
                        src={`/projects/${project.image}.png`}
                        priority={index === 0 ? 'true' : 'false'}
                        width={400}
                        height={350}
                        alt={project.title}
                        placeholder="blur"
                        autoResize
                        quality={80}
                        layout="responsive"
                      />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: 'flex-start' }}>
                      <Grid.Container gap={0.5} justify="center">
                        {project.technologies.frontend.map((tec) => (
                          <Grid xs={3} sm={4} key={tec} justify="center">
                            <Image
                              src={`/frontEndSkills/${tec}.png`}
                              width={45}
                              height={50}
                              alt={tec}
                            ></Image>
                          </Grid>
                        ))}
                        {project.technologies.backend.map((tec) => (
                          <Grid xs={3} sm={4} key={tec} justify="center">
                            <Image
                              src={`/backEndSkills/${tec}.png`}
                              width={45}
                              height={50}
                              alt={tec}
                            ></Image>
                          </Grid>
                        ))}
                      </Grid.Container>
                    </Card.Footer>
                  </Card>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Grid.Container>
      </Box>
    </Layout>
  );
}
