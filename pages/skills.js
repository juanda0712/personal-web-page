import Layout from '../components/Layout';
import { useContext, useEffect } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Grid, Spacer, Text } from '@nextui-org/react';
import Image from 'next/image';

export default function Skills(){
    const { dispatch } = useContext(Store);
    const frontendSkills = [
        'react',
        'nextjs',
      ];
    const backendSkills = ['nodejs', 'aspdotnet2', 'mysql', 'mongodb'];
    const languajes = ['javascript', 'csharp','c++', 'java'];
    const management = ['git2', 'docker', 'azureDevOps'];
    const technicalSupport = ['technicalSupport', 'cisco2', 'virtualization','office365', 'linux'];

    useEffect(() => {
        dispatch({
        type: 'NAV_UPDATE_NAVSTATE',
        payload: 'skills',
        });
        Cookies.set('nav', JSON.stringify({ navstate: 'skills' }));
    }, [dispatch]);

    return (
    <Layout>
        <Grid.Container justify='center'>
            <Grid sm={12} md={12} style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    justifyItems: 'center'
                 }}>

              <Text h2 color="white">
                &nbsp; SKILLS
              </Text>
            </Grid>
            <Grid xs={12} md={12} 
                style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                 }}>
                    <Spacer y={1} />
                    <Text h3 color="white" style={{textAlign: 'center'}}>
                    Used Languages
                    </Text>
                    <Spacer y={1} />
                    <Grid.Container gap={1} justify="center">
                        {languajes.map((item, index) => (
                        <Grid xs={3} sm={2} key={index} justify="center">
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
                </Grid>
                <Grid xs={12} md={12} style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                 }}>
                <Text h3 color="white" style={{textAlign: 'center'}}>
                    Technical Support
                </Text>
                <Spacer y={1} />
                <Grid.Container gap={1} justify="center">
                    {technicalSupport.map((item, index) => (
                    <Grid xs={3} sm={2} key={index} justify="center">
                        <Image
                        src={`/support/${item}.png`}
                        width={65}
                        height={65}
                        alt={item}
                        />
                    </Grid>
                    ))}
                </Grid.Container>
                <Spacer y={3} />
              </Grid>
                
                <Grid xs={12} md={6}  style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                 }}>
                    <Text h3 color="white" style={{textAlign: 'center'}}>
                        FrontEnd
                    </Text>
                    <Spacer y={1} />
                    <Grid.Container gap={1} justify='center'>
                        {frontendSkills.map((item, index) => (
                        <Grid xs={3} sm={4} key={index} justify="center">
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
                </Grid>
                <Grid xs={12} md={12} style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                 }}>
                    <Text h3 color="white" style={{textAlign: 'center'}}>
                    BackEnd
                    </Text>
                    <Spacer y={1} />
                    <Grid.Container gap={1} justify="center">
                        {backendSkills.map((item, index) => (
                        <Grid xs={3} sm={2} key={index} justify="center">
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
                </Grid>
                <Grid xs={12} md={12} style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                 }}>
                    <Text h3 color="white" style={{textAlign: 'center'}}>
                    Management
                    </Text>
                    <Spacer y={1} />
                    <Grid.Container gap={1} justify="center">
                        {management.map((item, index) => (
                        <Grid xs={3} sm={2} key={index} justify="center">
                            <Image
                            src={`/management/${item}.png`}
                            width={65}
                            height={65}
                            alt={item}
                            />
                        </Grid>
                        ))}
                    </Grid.Container>
                </Grid>                   
        </Grid.Container>
    </Layout>)
}