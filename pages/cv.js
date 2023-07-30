import Layout from '../components/Layout';
import { Button, Grid, Spacer } from '@nextui-org/react';
import { useState } from 'react';

export default function Cv() {
  const [language, setLanguage] = useState('ESP');
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <iframe
        src="/files/JUAN_ESP_RESUME.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: '0',
        }}
      />
    </div>
  );

  /* <Layout>
      <Grid.Container justify="center">
        <Grid sm={8} md={7} justify="center">
          <Grid xs={12} md={4} justify="center">
            <Button shadow color="gradient">
              Español
            </Button>
          </Grid>
          <Spacer y={0.8} />
          <Grid xs={12} md={4} justify="center">
            <Button shadow color="gradient">
              Ingles
            </Button>
          </Grid>
          <Spacer y={0.8} />
        </Grid>
      </Grid.Container>
      <Spacer y={1.4} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <iframe src="/files/JUAN_ESP_RESUME.pdf" width="100%" height="700rem" />
      </div>
      <p>
        <a href="/files/JUAN_ESP_RESUME.pdf" download>
          Descargar PDF
        </a>
      </p>
    </Layout> */
}
