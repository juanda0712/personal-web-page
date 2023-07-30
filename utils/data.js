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
        'En este proyecto académico del curso de Algoritmos y Estructuras de Datos II, desarrollamos un sistema que recupera una imagen utilizando el algoritmo genético. El algoritmo genético es una técnica de inteligencia artificial que se inspira en la evolución biológica para resolver problemas de optimización y búsqueda. Funciona mediante la generación y evolución de soluciones candidatas a lo largo de múltiples generaciones, seleccionando y combinando las mejores soluciones para mejorar progresivamente los resultados. En el contexto de este proyecto, el algoritmo genético se utiliza para buscar y obtener la parte faltante de una imagen específica de manera eficiente y automatizada. ',
      src: 'projects/videos/imageRecovery',
      language: ['c++'],
    },
    {
      title: 'Breakout',
      description:
        'Este proyecto se diseñó con arquitectura cliente-servidor en Java, donde el jugador se comunica exclusivamente con el servidor mediante el enfoque de sockets. Se implementaron los patrones de diseño Singleton para garantizar una única instancia del servidor y Observer para notificar a los jugadores sobre cambios en el estado del juego. El objetivo fue mejorar la eficiencia y escalabilidad del juego, proporcionando una experiencia de juego fluida y en tiempo real. ',
      src: 'projects/videos/breakout',
      language: ['java'],
    },
  ],
};

export default data;
