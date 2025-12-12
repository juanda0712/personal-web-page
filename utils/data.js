const data = {
  projects: [
    {
      title: 'Next Tailwind Amazona',
      description:
        'Este proyecto es un sitio web de comercio electrónico. Utilicé tecnología de renderizado en el lado del servidor (SSR) para lograr un rendimiento óptimo y estilos de Tailwind CSS para una apariencia moderna. Además de una variedad de productos, integré pasarelas de pago seguras para facilitar las transacciones. Enfoqué en la usabilidad, la seguridad y la experiencia del usuario para brindar una plataforma confiable y atractiva. ',
      image: 'amazona',
      technologies: {
        backend: ['nodejs', 'mongodb'],
        frontend: ['html5', 'css3', 'javascript', 'react', 'nextjs'],
      },
      url: 'https://next-tailwind-amazona-two.vercel.app/',
    },

    {
      title: 'Giffy',
      description:
        'Este proyecto web consistió en consumir una API profesional de GIPHY para obtener gifs y contenido multimedia. Para acceder a los recursos protegidos, implementé la autenticación mediante tokens. Además, optimicé las consultas utilizando filtros en los endpoints y manejé eficientemente grandes JSONs para asegurar un rendimiento óptimo del sitio. La experiencia me permitió mejorar mis habilidades en el manejo de APIs',
      image: 'giffy',
      technologies: {
        backend: [],
        frontend: ['html5', 'css3', 'javascript', 'react'],
      },
      url: 'https://giffy-flame-one.vercel.app/',
    },
    {
      title: 'XKCD Comics',
      description:
        'En este proyecto, se desarrolló un scraper personalizado para extraer cómics de una pseudo API creada por el artista. El scraper utilizó técnicas de web scraping para obtener datos estructurados de la página web del artista, incluyendo cómics, descripciones y metadatos. Esta solución permitió presentar la información de manera organizada y atractiva, proporcionando a los usuarios una experiencia dinámica al acceder al contenido del artista de forma automatizada y eficiente.',
      image: 'xkcd',
      technologies: {
        backend: ['nodejs'],
        frontend: ['html5', 'css3', 'javascript', 'react', 'nextjs'],
      },
      url: 'https://xkcd-web-app-and-scraper.vercel.app/',
    },
    {
      title: 'Blog JuanDa',
      description:
        'Este proyecto es un enfoque fundamental para crear la estructura de un blog sencillo utilizando solo HTML y CSS. Al centrarse en una base sólida, el sitio proporciona una estructura bien organizada y accesible, sentando las bases para un futuro desarrollo y mejora del blog.',
      image: 'basicBlog',
      technologies: {
        backend: [],
        frontend: ['html5', 'css3'],
      },
      url: 'https://basic-blog-roan.vercel.app/',
    },
  ],
  desktop: [
    {
      title: 'Image Recovery',
      description:
        'In this academic project for the Algorithms and Data Structures II course, we developed a system that recovers an image using the genetic algorithm. The genetic algorithm is an artificial intelligence technique inspired by biological evolution to solve optimization and search problems. It works by generating and evolving candidate solutions over multiple generations, selecting and combining the best solutions to progressively improve the results. In the context of this project, the genetic algorithm is used to efficiently and automatically search for and obtain the missing part of a specific image.',
      src: 'projects/videos/imageRecovery',
      language: ['c++'],
    },
    {
      title: 'Breakout',
      description:
        'This project was designed with a client-server architecture in Java, where the player communicates exclusively with the server using the sockets approach. We implemented the Singleton design pattern to ensure a single server instance and the Observer pattern to notify players of changes in the game state. The objective was to improve the efficiency and scalability of the game, providing a fluid and real-time gaming experience.',
      src: 'projects/videos/breakout',
      language: ['java'],
    },
  ],
};

export default data;
