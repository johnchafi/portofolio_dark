export const headerLinks = [
    {
      label: 'Experience',
      route: '#experience',
    },
    {
      label: 'Projects',
      route: '#projects',
    },
    {
      label: 'Contact',
      route: '#contact',
    },
  ]

export const experiences = [
  {
      company : "Desjardins",
      title : "Programmer Analyst",
      imageSrc: "/assets/Logo-Desjardins.jpeg",
      descriptions:
        [
          "Collaborated with clients to gather requirements and provide effective software solutions.",
          "Analyzed complex technical problems to develop appropriate solutions.",
          " Designed and developed applications to meet user needs.",
          "Documented technical issues to create user guides.",
          "Implemented an application for monitoring processes across Desjardins enterprise.",
          "Resolved complex customer issues and succeeded to reduce their complaints by 95%.",
          "Led team meetings to optimize applications creation cycle."

        ]  
  },
 {
  company : "Krispii.inc, Leonard Agency web, Laval University",
  title : "Full stack developer",
  imageSrc:"/assets/image_holder.png",
  descriptions:
    [
      "Evaluated various software products in case of issues",
      "Handled backend and frontend programming.",
      "Managed containerization and deployment using Docker and Kubernetes.",
      "Designed unit tests and resolved anomalies.",
      "Designed and developed Rest APIs.",
      "Implemented Databases (MySQL, PostgreSQL).",
      "Communicated with the Process and Tools teams about project progress and any difficulties encountered.",
      "Implemented a livestream feature using WebRTC, ensuring high-quality real-time video.",
      "Automated repetitive tasks using scripting which saved a lot of hours.",
      "Optimized SQL queries to decrease loading time by 25%."



    ]  
},
]

export const socialMedia = [
  {
    id: 1,
    img: "/assets/git.svg",
    link:"Https://github.com/johnchafi",
  },
  {
    id: 3,
    img: "/assets/link.svg",
    link:"Https://linkedin.com/in/jean-de-dieu-u-779418122",
  },
];


export const projects = [
  {
    title : 'Denarius',
    description: 'I designed and implemented webpages for Denarius exchange',
    image:'/assets/denarius.png',
    link:'http://denarius.com',
    languages:['Javascript', 'HTML', 'CSS']

  },
  {
    title : 'Evently',
    description: 'Event & Ticketing Platform for hosting events.',
    image:'/assets/denarius.png',
    link:'',
    languages:['NextJs', 'Tailwind', 'NodeJS', 'MongoDB']

  },
  {
    title : 'Umovie',
    description: 'A clone of IMDB movie',
    image:'/assets/movie.png',
    link:'https://moviejohn.netlify.app/',
    languages:['ReactJs', 'Styled components', 'External API']

  },

  {
    title : 'Portofolio',
    description: 'My personal website portfolio',
    image:'/assets/portofolio_black.png',
    link:'https://github.com/johnchafi/portofolio_dark',
    languages:['NextJs', 'Tailwind', 'Framer motion']

  },
]