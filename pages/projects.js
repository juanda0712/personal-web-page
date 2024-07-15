import { Grid, Spacer, Text } from '@nextui-org/react';
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

  const containerStyle = {
    position: 'relative',
    alignItems: 'center',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 114, 245, 0.9)',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
    border: '2px solid black',
  };

  const imageStyle = {
    margin: '10px 0',
  };

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
          Aplicaciones Web
        </Text>
        <Text h2 size={20} color="white" style={{ maxWidth: '60rem' }}>
          Te invito a explorar algunos de mis proyectos más recientes. ¡Espero
          que disfrutes visitarlos!.
        </Text>
      </div>
      <Spacer y={2} />
      <Grid.Container justify="center">
        {projects.map((project) => (
          <div key={project.url} style={{ width: '100%' }}>
            <Grid xs={12} md={12} justify="center">
              <Grid.Container justify="center">
                <Grid
                  sm={8}
                  md={9}
                  style={{
                    backgroundColor: '#D1D1D1',
                    border: 'solid',
                    borderColor: '#A5A5A5',
                  }}
                >
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
                        textAlign: 'center',
                        maxWidth: '30rem',
                      }}
                    >
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
                      <Spacer y={1} />
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
                    </div>
                  </Grid>
                  <Grid sm={12} md={6} justify="center" style={containerStyle}>
                    <Link href={project.url} target="_blank">
                      <Image
                        src={`/projects/${project.image}.png`}
                        alt={project.title}
                        width={500}
                        height={313}
                        quality={70}
                        priority={true}
                        style={imageStyle}
                      />
                    </Link>
                    <Link
                      href={project.url}
                      target="_blank"
                      style={buttonStyle}
                    >
                      Visitar
                    </Link>
                  </Grid>
                </Grid>
              </Grid.Container>
            </Grid>
            <Spacer y={3} />
          </div>
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
          Aplicaciones Escritorio
        </Text>
        <Text h2 size={20} color="white" style={{ maxWidth: '60rem' }}>
          Estos proyectos académicos fueron desafiantes e interesantes para mi
          equipo de trabajo.
        </Text>
      </div>
      <Grid.Container justify="center">
        {desktop.map((project) => (
          <div key={project.title} style={{ width: '100%' }}>
            <Spacer y={3} />
            <Grid xs={12} md={12} justify="center">
              <Grid.Container justify="center">
                <Grid
                  sm={8}
                  md={9}
                  style={{
                    backgroundColor: '#D1D1D1',
                    border: 'solid',
                    borderColor: '#A5A5A5',
                  }}
                >
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
                        textAlign: 'center',
                        maxWidth: '30rem',
                      }}
                    >
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
                      <Spacer y={1} />
                      <Grid.Container justify="center" gap={0.5}>
                        {project.language.map((tec) => (
                          <Grid sm={6} md={6} key={tec} justify="center">
                            <Image
                              src={`/languages/${tec}.png`}
                              width={40}
                              height={45}
                              alt={tec}
                            ></Image>
                          </Grid>
                        ))}
                      </Grid.Container>
                    </div>
                  </Grid>
                  <Grid sm={12} md={6} justify="center" style={containerStyle}>
                    <div
                      style={{
                        margin: '10px 0',
                      }}
                    >
                      <video width="370rem" height="300rem" controls>
                        <source src={`${project.src}.mp4`} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </div>
                  </Grid>
                </Grid>
              </Grid.Container>
            </Grid>
          </div>
        ))}
      </Grid.Container>
    </Layout>
  );
}
