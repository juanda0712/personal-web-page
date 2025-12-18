import { Grid, Spacer, Text, Container } from '@nextui-org/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import data from '../utils/data';
import { Store } from '../utils/Store';

export default function Projects() {
  const { dispatch } = useContext(Store);
  const { desktop } = data;

  useEffect(() => {
    dispatch({
      type: 'NAV_UPDATE_NAVSTATE',
      payload: 'projects',
    });
    Cookies.set('nav', JSON.stringify({ navstate: 'projects' }));
  }, [dispatch]);

  // --- STYLES ---
  const sectionCardStyle = {
    backgroundColor: '#D1D1D1',
    border: 'solid 2px #A5A5A5',
    padding: '20px',
    borderRadius: '15px',
    width: '100%',
  };

  const imageContainerStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #333',
    margin: '10px auto', // Margen por defecto
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    backgroundColor: '#000',
  };

  const techBadgeStyle = {
    marginRight: '8px',
    marginBottom: '8px',
    backgroundColor: '#0072F5',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  };

  return (
    <Layout title="Projects">
      {/* ==========================================================================================
          HEADER
         ========================================================================================== */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Text
          h1
          size={50}
          css={{ textGradient: '45deg, $accents9 10%, $blue900 80%' }}
          weight="bold"
        >
          Featured Projects
        </Text>
        <Text h2 size={24} color="white" style={{ maxWidth: '55rem' }}>
          A selection of engineering, architecture, and IoT solutions in which I
          have participated.
        </Text>
      </div>
      <Spacer y={2} />
      {/* ==========================================================================================
          PROJECT 1: NFL FANTASY (WEB & CLOUD)
         ========================================================================================== */}
      <Container md>
        <Text
          h1
          size={35}
          color="white"
          css={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Cloud & Web Architecture
        </Text>

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              {/* HEADER DEL PROYECTO */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Text h3 color="#111">
                  New Generation NFL Fantasy
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '10px',
                  }}
                >
                  {[
                    'Angular',
                    '.NET Core',
                    'SQL Server',
                    'Azure Cloud',
                    'Azure DevOps',
                    'Git Flow',
                  ].map((tech) => (
                    <span key={tech} style={techBadgeStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DESCRIPCIÓN PRINCIPAL Y DASHBOARD */}
              <Grid.Container gap={2}>
                <Grid xs={12} md={6} direction="column">
                  <Text color="#333">
                    <strong>Role:</strong> Full Stack Engineer & Scrum Team
                    Member
                    <br />
                    <strong>Methodology:</strong> Scrum (2-week Sprints)
                  </Text>
                  <Spacer y={0.5} />
                  <Text color="#333" style={{ textAlign: 'justify' }}>
                    We developed a comprehensive Fantasy Football platform,
                    ensuring scalability and high availability using{' '}
                    <strong>Azure Cloud</strong> services. The solution follows
                    a strict <strong>Clean Architecture</strong> pattern and
                    adheres to
                    <strong> SOLID</strong> design principles, fully decoupling
                    the
                    <strong> Angular</strong> frontend from the{' '}
                    <strong>.NET Core</strong> backend to maximize
                    maintainability, testability, and independent scaling.
                  </Text>

                  <Spacer y={0.5} />
                  <Text color="#333" style={{ textAlign: 'justify' }}>
                    Beyond coding, the project focused heavily on Engineering
                    Process. Managed via <strong>Azure DevOps</strong>, we
                    adhered to rigorous
                    <strong> Scrum</strong> ceremonies and artifact management.
                    We utilized CI/CD pipelines to automate deployments across
                    multiple environments, ensuring that quality was built into
                    the product from day one rather than inspected in at the
                    end.
                  </Text>
                </Grid>

                <Grid xs={12} md={6}>
                  <div style={imageContainerStyle}>
                    <video
                      width="100%"
                      height="auto"
                      controls
                      autoPlay
                      muted
                      loop
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    >
                      <source src="nfl-fantasy/demo.mp4" type="video/mp4" />
                      Tu navegador no soporta la etiqueta de video.
                    </video>
                  </div>
                </Grid>
              </Grid.Container>

              <Spacer y={2} />

              {/* SECCIÓN: ARQUITECTURA DE AMBIENTES (DEV, TEST, PROD) */}
              <div style={{ borderTop: '1px solid #999', paddingTop: '20px' }}>
                <Text
                  h4
                  color="#111"
                  css={{ textAlign: 'center', marginBottom: '15px' }}
                >
                  Infrastructure & Environment Architecture
                </Text>
                <Grid.Container gap={1}>
                  <Grid xs={12} sm={4} direction="column" alignItems="center">
                    <Text b size={14} color="#333">
                      Development
                    </Text>
                    <div style={imageContainerStyle}>
                      <Image
                        src="/nfl-fantasy/diagrama-dev.png"
                        width={250}
                        height={180}
                        alt="Architecture Dev"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </Grid>
                  <Grid xs={12} sm={4} direction="column" alignItems="center">
                    <Text b size={14} color="#333">
                      Testing / QA
                    </Text>
                    <div style={imageContainerStyle}>
                      <Image
                        src="/nfl-fantasy/diagrama-test.png"
                        width={250}
                        height={180}
                        alt="Architecture Test"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </Grid>
                  <Grid xs={12} sm={4} direction="column" alignItems="center">
                    <Text b size={14} color="#333">
                      Production
                    </Text>
                    <div style={imageContainerStyle}>
                      <Image
                        src="/nfl-fantasy/diagrama-prod.png"
                        width={250}
                        height={180}
                        alt="Architecture Prod"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </Grid>
                </Grid.Container>
              </div>

              <Spacer y={2} />

              {/* SECCIÓN: ESTRATEGIA GIT Y DEVOPS */}
              <div style={{ borderTop: '1px solid #999', paddingTop: '20px' }}>
                <Text h4 color="#111" css={{ marginBottom: '15px' }}>
                  Git Workflow & Code Quality Strategy
                </Text>
                <Spacer y={0.5} />
                <Text color="#333" size={15}>
                  <strong>Repository:</strong>{' '}
                  <a
                    href="https://github.com/CarlosCL13/NFL_Fantasy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0072F5', fontWeight: 'bold' }}
                  >
                    View on GitHub
                  </a>
                </Text>
                <Spacer y={0.5} />
                <Grid.Container gap={2} alignItems="center">
                  <Grid xs={12} md={7}>
                    <Text
                      color="#333"
                      size={15}
                      style={{ textAlign: 'justify' }}
                    >
                      To guarantee stability and traceability, we enforced a
                      robust
                      <strong> Git Branching Strategy</strong> consisting of:
                    </Text>
                    <ul
                      style={{
                        listStyleType: 'disc',
                        paddingLeft: '20px',
                        color: '#333',
                      }}
                    >
                      <li>
                        <strong>Protected Branches:</strong> A stable{' '}
                        <code>main</code> branch for production releases and a{' '}
                        <code>develop</code> branch for integration.
                      </li>
                      <li>
                        <strong>Feature Branches:</strong> All development
                        occurred in isolated feature branches derived from{' '}
                        <code>develop</code>.
                      </li>
                      <li>
                        <strong>Strict Pull Request (PR) Policy:</strong> Merges
                        to <code>develop</code>
                        required a mandatory PR. No direct pushes were allowed.
                      </li>
                      <li>
                        <strong>Code Reviews & Traceability:</strong> Every PR
                        required peer reviews and had to be linked to its
                        respective <strong>Azure DevOps Issue/Task</strong>. We
                        utilized a strict template for PR descriptions to
                        document changes and testing evidence efficiently.
                      </li>
                    </ul>
                  </Grid>
                  <Grid xs={12} md={5}>
                    <div style={imageContainerStyle}>
                      <Image
                        src="/nfl-fantasy/github-repo.png"
                        width={400}
                        height={250}
                        alt="Git Strategy and Repo"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </Grid>
                </Grid.Container>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={4} />
      {/* ==========================================================================================
          PROJECT 2: SMART HOME (EMBEDDED SYSTEMS & IOT)
         ========================================================================================== */}
      <Container md>
        <Text
          h1
          size={35}
          color="white"
          css={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Embedded Systems & IoT
        </Text>

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              {/* === ROW 1: TEXT DESCRIPTION (LEFT) & VERTICAL VIDEO (RIGHT) === */}
              <Grid.Container gap={2} alignItems="flex-start">
                <Grid xs={12} md={6} direction="column">
                  <Text h3 color="#111">
                    Smart Home Custom Control System
                  </Text>
                  <Text color="#444" size={14} css={{ marginBottom: '15px' }}>
                    Custom Linux OS • Driver Development • Hardware Integration
                  </Text>

                  <div style={{ marginBottom: '15px' }}>
                    {[
                      'Raspberry Pi 4',
                      'Yocto Project',
                      'C/C++',
                      'Cross-Compilation',
                      'Flask(python)',
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          ...techBadgeStyle,
                          backgroundColor: '#17c964',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Text color="#333">
                    Developed a <strong>Embedded Web Server</strong> to control
                    and monitor a physical Smart Home model. Unlike standard
                    implementations, this project involved building a{' '}
                    <strong>Custom Linux Image</strong> using the
                    <strong> Yocto Project</strong>.
                  </Text>
                  <Spacer y={0.5} />
                  <Text color="#333">
                    <strong>Key Engineering Features:</strong>
                  </Text>
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#333',
                    }}
                  >
                    <li>
                      <strong>Cross-Compiled Libraries:</strong> We wrote custom
                      C/C++ dynamic libraries to interface directly with the
                      hardware sensors (GPIOs) and cross-compiled them for the
                      target architecture.
                    </li>
                    <li>
                      <strong>Real-Time Synchronization:</strong> The system
                      features bidirectional communication. Interacting with the
                      physical model (e.g., opening a door) updates the web
                      interface instantly, and clicking a light on the web turns
                      on the physical LED.
                    </li>
                    <li>
                      <strong>Camera Integration:</strong> Implemented driver
                      support to capture real-time snapshots of the environment
                      via the web dashboard.
                    </li>
                  </ul>
                </Grid>

                {/* RIGHT COLUMN: MEDIA (VERTICAL VIDEO) */}
                <Grid
                  xs={12}
                  md={6}
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Text b color="#333" size={14}>
                    Hardware & Model Interaction Demo
                  </Text>
                  <div
                    style={{
                      ...imageContainerStyle,
                      maxWidth: '350px',
                      margin: '10px auto',
                      backgroundColor: '#000',
                      height: '550px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <video
                      width="100%"
                      height="auto"
                      controls
                      loop
                      muted
                      playsInline
                      style={{
                        borderRadius: '10px',
                        objectFit: 'contain',
                      }}
                    >
                      <source src="/smart-home/demo2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Grid>
              </Grid.Container>

              <Spacer y={1} />

              {/* === ROW 2: WEB UI IMAGE (FULL WIDTH) === */}
              <Grid.Container
                justify="center"
                style={{ borderTop: '1px solid #999', paddingTop: '20px' }}
              >
                <Grid xs={12} direction="column" alignItems="center">
                  <Text b color="#333" size={14}>
                    Web Control Dashboard Interface
                  </Text>
                  <div style={imageContainerStyle}>
                    <Image
                      src="/smart-home/dashboard.png"
                      width={700}
                      height={400}
                      alt="Smart Home Web Interface"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={4} />

      {/* ==========================================================================================
          NEW SECTION: FPGA & DIGITAL LOGIC DESIGN
         ========================================================================================== */}
      <Container md>
        <Text
          h1
          size={35}
          color="white"
          css={{ textAlign: 'center', marginBottom: '20px' }}
        >
          FPGA & Digital Logic Design
        </Text>

        <Grid.Container gap={2} justify="center">
          {/* --- PROYECTO C: NIOS II ALARM CLOCK --- */}
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              {/* VERTICAL LAYOUT FOR ALARM CLOCK (Similar to Smart Home) */}
              <Grid.Container gap={2} alignItems="flex-start">
                {/* LEFT: DESCRIPTION */}
                <Grid xs={12} md={6} direction="column">
                  <Text h3 color="#111">
                    NIOS II Soft-Processor Alarm System
                  </Text>
                  <Text color="#444" size={14} css={{ marginBottom: '15px' }}>
                    Hardware/Software Co-Design • Interrupts • Platform Designer
                  </Text>
                  <div style={{ marginBottom: '15px' }}>
                    {[
                      'Altera NIOS II',
                      'C Language',
                      'Platform Designer (Qsys)',
                      'Quartus Prime',
                      'Interrupts (ISR)',
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          ...techBadgeStyle,
                          backgroundColor: '#00B5AD', // Teal color for Hardware
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Text color="#333" style={{ textAlign: 'justify' }}>
                    Designed a complete microprocessor system on an FPGA using
                    the <strong>NIOS II</strong> soft-core processor. This
                    project demonstrates true <strong>HW/SW Co-Design</strong>,
                    where the hardware architecture was defined in
                    <strong> Platform Designer (Qsys)</strong> and the logic was
                    implemented in C.
                  </Text>
                  <Spacer y={0.5} />
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#333',
                    }}
                  >
                    <li>
                      <strong>Microarchitecture:</strong> Integrated the NIOS II
                      CPU with custom peripherals including JTAG, Timers,
                      7-segment displays, and Buttons.
                    </li>
                    <li>
                      <strong>Interrupt Driven:</strong> Avoided busy-waiting by
                      implementing hardware{' '}
                      <strong>Interrupt Service Routines (ISRs)</strong> for the
                      timer and buttons, ensuring precise timekeeping and
                      responsive user input.
                    </li>
                    <li>
                      <strong>Functionality:</strong> A fully functional alarm
                      clock allowing time setting, alarm configuration, and
                      audio-visual triggers via buzzer/LEDs.
                    </li>
                  </ul>
                </Grid>

                {/* RIGHT: VERTICAL VIDEO */}
                <Grid
                  xs={12}
                  md={6}
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                >
                  <Text b color="#333" size={14}>
                    System Operation Demo
                  </Text>
                  <div
                    style={{
                      ...imageContainerStyle,
                      maxWidth: '350px',
                      margin: '10px auto',
                      backgroundColor: '#000',
                      height: '550px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <video
                      width="100%"
                      height="auto"
                      controls
                      loop
                      muted
                      playsInline
                      style={{
                        borderRadius: '10px',
                        objectFit: 'contain',
                      }}
                    >
                      {/* TODO: Add your video file here */}
                      <source
                        src="/fpga/alarm-clock-demo.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Grid>
              </Grid.Container>

              {/* BOTTOM: QSYS IMAGE */}
              <Grid.Container
                justify="center"
                style={{ borderTop: '1px solid #999', paddingTop: '20px' }}
              >
                <Grid xs={12} direction="column" alignItems="center">
                  <Text b color="#333" size={14}>
                    Platform Designer (Qsys) Architecture
                  </Text>
                  <div style={imageContainerStyle}>
                    {/* TODO: Add your Qsys image here */}
                    <Image
                      src="/fpga/qsys-design.png"
                      width={800}
                      height={400}
                      alt="NIOS II Qsys Design"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>

          <Spacer y={2} />

          {/* --- PROYECTO D: VGA TIC-TAC-TOE --- */}
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <Text h3 color="#111">
                  Hardware-Based VGA Tic-Tac-Toe
                </Text>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '10px',
                  }}
                >
                  {[
                    'SystemVerilog',
                    'VGA Controller',
                    'FSM (Finite State Machines)',
                    'UART',
                    'Digital Logic',
                  ].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        ...techBadgeStyle,
                        backgroundColor: '#204E8A', // Darker Blue
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Grid.Container gap={2} alignItems="center">
                {/* LEFT: DESCRIPTION */}
                <Grid xs={12} md={5} direction="column">
                  <Text color="#333" style={{ textAlign: 'justify' }}>
                    A multiplayer Tic-Tac-Toe game built entirely in hardware
                    using <strong>SystemVerilog</strong>, without a CPU core.
                    The project focuses on low-level digital logic and video
                    signal generation.
                  </Text>
                  <Spacer y={0.5} />
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#333',
                    }}
                  >
                    <li>
                      <strong>Custom VGA Controller:</strong> Designed a driver
                      from scratch to manage H-Sync and V-Sync signals for a
                      640x480 @ 60Hz resolution.
                    </li>
                    <li>
                      <strong>FSM Game Logic:</strong> Utilized complex Finite
                      State Machines to manage turn-taking, win-detection
                      algorithms, and debouncing of physical inputs.
                    </li>
                    <li>
                      <strong>Hybrid Control:</strong> Supports Player vs.
                      Player or Player vs. CPU (via Arduino UART integration).
                    </li>
                  </ul>
                </Grid>

                {/* RIGHT: IMAGE GRID (3 IMAGES) */}
                <Grid xs={12} md={7}>
                  <Grid.Container gap={1}>
                    <Grid xs={12}>
                      <div style={imageContainerStyle}>
                        {/* Main Image */}
                        <Image
                          src="/fpga/vga-game-3.jpg"
                          width={500}
                          height={300}
                          alt="VGA Game Main Screen"
                          style={{
                            objectFit: 'cover',
                            objectPosition: 'top center',
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <div style={imageContainerStyle}>
                        {/* Secondary Image 1 */}
                        <Image
                          src="/fpga/vga-game-1.jpg"
                          width={250}
                          height={150}
                          alt="VGA Game Gameplay"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </Grid>
                    <Grid xs={6}>
                      <div style={imageContainerStyle}>
                        {/* Secondary Image 2 */}
                        <Image
                          src="/fpga/vga-game-2.jpg"
                          width={250}
                          height={150}
                          alt="VGA Game Win State"
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid.Container>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={4} />

      {/* ==========================================================================================
          SECTION: ANALOG & MIXED SIGNALS
         ========================================================================================== */}
      <Container md>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '50px',
            marginBottom: '20px',
          }}
        >
          <Text h1 size={35} color="white" css={{ textAlign: 'center' }}>
            Analog & Mixed Signals
          </Text>
        </div>

        {/* --- PROYECTO A: PROXIMITY AUDIO MIXER (AHORA CON 2 IMÁGENES) --- */}
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              <Grid.Container gap={2} alignItems="center">
                {/* COLUMNA 1: IMÁGENES DEL CIRCUITO (APILADAS) */}
                <Grid xs={12} md={6} direction="column">
                  {/* Imagen Original */}
                  <div
                    style={{
                      ...imageContainerStyle,
                      backgroundColor: '#fff',
                      margin: '0 auto 10px auto', // Ajuste de margen para apilar
                    }}
                  >
                    <Image
                      src="/mixed-signals/mixer-circuit.jpg"
                      width={500}
                      height={300}
                      alt="Audio Mixer Circuit 1"
                      style={{ objectFit: 'contain' }} // <-- CORREGIDO
                    />
                  </div>
                  {/* Nueva Imagen (Diagrama) */}
                  <div
                    style={{
                      ...imageContainerStyle,
                      backgroundColor: '#fff',
                      margin: '0 auto',
                    }}
                  >
                    <Image
                      src="/mixed-signals/mixer-circuit2.png"
                      width={500}
                      height={300}
                      alt="Audio Mixer Circuit 2 (Diagram)"
                      style={{ objectFit: 'contain' }} // <-- CORREGIDO
                    />
                  </div>
                </Grid>

                {/* COLUMNA 2: DESCRIPCIÓN TÉCNICA */}
                <Grid xs={12} md={6} direction="column">
                  <Text h3 color="#111">
                    Proximity Audio Mixer
                  </Text>
                  <div style={{ marginBottom: '10px' }}>
                    {[
                      'OpAmps',
                      'Analog Filters',
                      'Sensors',
                      'ADC',
                      'Voltage Control',
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          ...techBadgeStyle,
                          backgroundColor: '#9750DD',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Text color="#333" size={15} css={{ textAlign: 'justify' }}>
                    An analog audio mixing system controlled by a proximity
                    sensor. The circuit mixes two distinct audio sources (Signal
                    1 & 2) proportionally based on the distance of the user’s
                    hand.
                  </Text>
                  <Spacer y={0.5} />
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#333',
                    }}
                  >
                    <li>
                      <strong>Signal Conditioning:</strong> Linearization of
                      non-linear sensor data to ensure smooth audio transitions.
                    </li>
                    <li>
                      <strong>Voltage Controlled Gain:</strong> Implemented
                      stages where gain is strictly controlled by the processed
                      sensor voltage to fade signals in/out.
                    </li>
                    <li>
                      <strong>Complementary Logic:</strong> Designed analog
                      logic to calculate the signal complement (e.g., if Signal
                      A is 90%, Signal B is automatically 10%).
                    </li>
                  </ul>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        </Grid.Container>

        <Spacer y={2} />

        {/* --- PROYECTO B: TDM TELEPHONE SYSTEM (AHORA CON 2 IMÁGENES) --- */}
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={12}>
            <div style={sectionCardStyle}>
              <Grid.Container gap={2} alignItems="center">
                {/* COLUMNA 1: DESCRIPCIÓN TÉCNICA */}
                <Grid xs={12} md={6} direction="column">
                  <Text h3 color="#111">
                    TDM Telephone System
                  </Text>
                  <div style={{ marginBottom: '10px' }}>
                    {[
                      'TDM Multiplexing',
                      'DSP (FFT)',
                      'Infrared (IR)',
                      'Analog-Digital Hybrid',
                    ].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          ...techBadgeStyle,
                          backgroundColor: '#F5A524',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Text color="#333" size={15} style={{ textAlign: 'justify' }}>
                    A dual-stage system (Analog & Digital) designed to simulate
                    the operation of a telephone keypad using{' '}
                    <strong>Time Division Multiplexing (TDM)</strong>. The core
                    innovation involves a wireless optical link and advanced
                    signal processing.
                  </Text>
                  <Spacer y={0.5} />
                  <ul
                    style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      color: '#333',
                    }}
                  >
                    <li>
                      <strong>Frequency Synthesis:</strong> Analog generation of
                      6 distinct frequencies, combined in specific pairs
                      ($f_0-f_2$ mixed with $f_3-f_5$) to encode data.
                    </li>
                    <li>
                      <strong>Optical Wireless Link:</strong> Transmission is
                      achieved via
                      <strong> Infrared Light</strong>. We implemented a custom
                      emitter-receiver pair using an
                      <strong> IR LED</strong> (Transmitter) and a filtered{' '}
                      <strong>Photodiode/Phototransistor</strong> (Receiver) to
                      minimize ambient noise.
                    </li>
                    <li>
                      <strong>Digital Signal Processing (DSP):</strong> The
                      received analog signal is digitized, and we applied the{' '}
                      <strong>Fast Fourier Transform (FFT)</strong> algorithm on
                      the microcontroller to decompose the signal, identify the
                      frequency pairs, and decode the key pressed.
                    </li>
                  </ul>
                </Grid>

                {/* COLUMNA 2: IMÁGENES DEL CIRCUITO (APILADAS) */}
                <Grid xs={12} md={6} direction="column">
                  {/* Imagen Original */}
                  <div
                    style={{
                      ...imageContainerStyle,
                      backgroundColor: '#fff',
                      margin: '0 auto 10px auto', // Ajuste de margen
                    }}
                  >
                    <Image
                      src="/mixed-signals/tdm-circuit.png"
                      width={500}
                      height={300}
                      alt="TDM System Circuit 1"
                      style={{ objectFit: 'contain' }} // <-- CORREGIDO
                    />
                  </div>
                  {/* Nueva Imagen (Diagrama) */}
                  <div
                    style={{
                      ...imageContainerStyle,
                      backgroundColor: '#fff',
                      margin: '0 auto',
                    }}
                  >
                    <Image
                      src="/mixed-signals/tdm-circuit2.png"
                      width={500}
                      height={300}
                      alt="TDM System Circuit 2 (Diagram)"
                      style={{ objectFit: 'contain' }} // <-- CORREGIDO
                    />
                  </div>
                </Grid>
              </Grid.Container>
            </div>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={4} />
      {/* ==========================================================================================
          PROJECT 3: DESKTOP APPS (LEGACY)
         ========================================================================================== */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Text h1 size={35} color="white">
          Desktop Applications
        </Text>
        <Text
          h2
          size={20}
          color="white"
          style={{ maxWidth: '60rem', textAlign: 'center' }}
        >
          Algorithmic and logic-heavy desktop solutions.
        </Text>
      </div>
      <Grid.Container justify="center">
        {desktop.map((project) => (
          <div key={project.title} style={{ width: '100%' }}>
            <Spacer y={3} />
            <Grid xs={12} md={12} justify="center">
              <Grid.Container justify="center">
                <Grid sm={8} md={9} style={sectionCardStyle}>
                  <Grid
                    sm={12}
                    md={6}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ textAlign: 'center', maxWidth: '30rem' }}>
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
                            />
                          </Grid>
                        ))}
                      </Grid.Container>
                    </div>
                  </Grid>
                  <Grid
                    sm={12}
                    md={6}
                    justify="center"
                    style={{ position: 'relative', alignItems: 'center' }}
                  >
                    <div style={{ margin: '10px 0' }}>
                      <video
                        width="100%"
                        height="auto"
                        controls
                        style={{ maxWidth: '370px', borderRadius: '10px' }}
                      >
                        <source src={`${project.src}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
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
