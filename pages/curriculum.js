import Layout from '../components/Layout';
import { useContext, useEffect, useRef, useState } from 'react';
import { Button, Grid } from '@nextui-org/react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { useMediaQuery } from '../components/useMediaQuery';

export default function CurriculumScreen() {
  const isMd = useMediaQuery(960);
  const viewer = useRef(null);
  const ins = useRef();
  const { dispatch } = useContext(Store);
  const [curriculumLanguage, setCurriculumLanguage] = useState('eng');

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/files/demo.pdf',
        },
        viewer.current
      ).then((instance) => {
        console.log(instance);
        instance.UI.disableElements([
          'printButton',
          'saveAsButton',
          'toolsOverlay',
          'toolsButton',
          'toolsHeader',
          'freeTextToolButton',
          'selectToolButton',
          'panToolButton',
          'annotationPopup',
          'contextMenuPopup',
          'textPopup',
          'stylePopup',
          'toolStylePopup',
          'annotationStylePopup',
          'ribbons',
          'leftPanel',
          'leftPanelButton',
        ]);
        ins.current = instance;
      });
    });
  }, []);

  useEffect(() => {
    dispatch({ type: 'NAV_UPDATE_NAVSTATE', payload: 'cv' });
    Cookies.set('nav', JSON.stringify({ navstate: 'cv' }));
  }, [dispatch]);

  useEffect(() => {
    const pdfSrc =
      curriculumLanguage === 'eng' ? '/files/demo.pdf' : '/files/lol.pdf';
    if (ins.current) {
      ins.current.loadDocument(pdfSrc);
    }
  }, [curriculumLanguage]);

  return (
    <Layout>
      <Grid.Container
        gap={2}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '10px' }}>
          <Button
            onClick={() => setCurriculumLanguage('eng')}
            style={{ background: 'black' }}
          >
            Ingles CV
          </Button>
          <Button
            onClick={() => setCurriculumLanguage('esp')}
            style={{ background: 'black' }}
          >
            Español CV
          </Button>
        </Grid>
        {isMd ? (
          <Grid justify="center">
            <div ref={viewer} style={{ height: '100vh' }} />
          </Grid>
        ) : (
          <Grid justify="center">
            <div ref={viewer} style={{ height: '100vh', width: '100vh' }} />
          </Grid>
        )}
      </Grid.Container>
    </Layout>
  );
}
