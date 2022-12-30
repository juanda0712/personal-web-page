const data = {
  projects: [
    {
      title: 'Next Tailwind Amazona',
      description:
        'This is a web project for E-commerce, was created with SSR (server side rendering) technology and Tailwind CSS styles were used ',
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
        'Web project that consumes a professional API from a well-known gif page called GIPHY',
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
        'This project uses the information collected by a very simple scraper that was created and that extracts the comics from a pseudo api created by the artist',
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
        'It is a very basic project to create a basic blog structure',
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
        'In this academic project we develop a system that retrieves an image using the generic algorithm ',
      src: 'projects/videos/imageRecovery',
      language: ['c++'],
    },
    {
      title: 'Breakout',
      description:
        'This project was designed with the client-server architecture in Java and implemented data structures and pattern designs. ',
      src: 'projects/videos/breakout',
      language: ['java'],
    }
  ],
};

export default data;
