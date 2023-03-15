// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstName: 'Viktoriia',
    lastName: 'Krasko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '1000$ в місяць',
  address: 'Kyiv, Shevchenka Boulevard 24',
}

var footer = {
  address: 'Kyiv, Shevchenka Boulevard 24',
  social: {
    email: {
      text: 'akiv.co@gmail.com',
      href: 'mailto:akiv.co@gmail.com',
    },
    phone: {
      text: '+380953676784',
      href: 'tel:+380953676784',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/viktoriia-krasko-vk/',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'CV * Summary',
      big: true,
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Hard-working and proactive junior developer
         with 6 months experience in delivering enjoable web
          and mobile products for the IT Brains company.
           Created and launched 4 web project and 3 mobile apps
            using React, Angular and PostgreSQL. 
            Also skilled with ExpressJS, MongoDB, jQuery.`,
      },

      experience: {
        title: 'Experience',
        text: `Addressed and fixed complex bugs, 
        implemented and updated application under the direction
         of Senior Software Developes, worked at an independent level,
          while also serving as an effective and enthusiastic collaborator. 
          Performed automated testing tasks and developed complex features routinely.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'CV * Skills',
      big: false,
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 5,
        },
        {
          name: 'CSS',
          point: 9,
          isTop: true,
        },
        {
          name: 'JavaScript',
          point: 2,
        },
        {
          name: 'React',
          point: 1,
        },
        {
          name: 'Node',
          point: 3,
        },
        {
          name: 'ExpressJS',
          point: 3,
        },
        {
          name: 'MongoDB',
          point: 0,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'GIT',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 5,
        },
        {
          name: 'NPM',
          point: 3,
          isTrue: false,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Cross-stitching',
          isMain: false,
        },
        {
          name: 'Travelling',
          isMain: false,
        },
        {
          name: 'Ant Farming',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'CV * Education',
      big: true,
    },

    header,

    main: {
      educations: [
        {
          name: 'Oxford University',
          isEnd: true,
        },
        {
          name: 'Coursera Class on Robotics',
        },
        {
          name: 'Udemy Course on Cybersecurity',
          isEnd: true,
        },
        {
          name: 'FreeCodeCamp',
        },
        {
          name: 'IT Brains Course on Fullstack JS',
        },
      ],
      certificates: [
        {
          name: 'Front-End Academia de Cotigo',
          id: 153744,
        },
        {
          name: 'API for Beginners CodeAcademy',
          id: 125845,
        },
        {
          name: 'Computer Science Diploma Summa Cum Laude Oxford University',
          id: 178654,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'CV * Projects',
      big: true,
    },

    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '01.01.2002',
            to: '01.01.2006',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Created resume with Handlebars and 0 knowledge in JS and CSS',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'HTML',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'No awards whatsoever',
                },
                {
                  name: 'Still no awards',
                },
              ],
              awardAmount: 2,
            },
            {
              name: 'Calculator',
              url: 'https://www.calculator.net/',
              about:
                'Created calculator with JS and React.js',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'JS',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'My colleagues used the calculator',
                },
                {
                  name: 'My boss praised my calculator',
                },
              ],
              awardAmount: 2,
            },
            {
              name: 'Cafe landing page',
              url: 'https://coffeeshop.com.ua/',
              about:
                'Created landing page with JS and React.js',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'JS',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Client was satisfied',
                },
                {
                  name: 'Cafe became more popular',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
        {
          position: 'Middle Fullstack Developer',
          company: {
            name: 'Abby',
            url: 'https://abby.com',
          },
          duration: {
            from: '01.01.2006',
            to: '01.01.2012',
          },
          projectAmount: 2,
        },
        {
          position: 'Senior Fullstack Developer',
          company: {
            name: 'Google',
            url: null,
          },
          duration: {
            from: '01.01.2012',
          },
          projectAmount: 3,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    // ↙ сюди вводимо JSON дані

    layout: 'person',

    page: {
      title: 'CV * Person',
      big: true,
    },

    person: {
      name: 'Viktoriia Krasko',
      age: 35,
      gender: 'Female',
      address: {
        street: 'Shevchenka 24',
        city: 'Kyiv',
        oblast: 'Kyivska oblast',
        zip: '02412',
        country: 'Ukraine',
      },
      education: [
        {
          degree: 'Bachelor of Philology',
          major: 'English language and literature',
          university: 'Kyiv National Linguistic University',
          graduationYear: 2011,
        },
      ],
      workExperience: [
        {
          company: 'Comfy LLC',
          title: 'Department Manager',
          startDate: '01.06.2011',
          endDate: '15.05.2014',
          responsibilities: [
            'Managing, motivating and training employees within a department',
            ' Maintaining quality service in terms of company standards',
            ' Providing reaching the target and all KPIs',
          ],
          year_founded: 2001,
          industry: 'Retail',
          employees: [
            {
              name: 'Oleksandr Popov',
              position: 'IT-expert',
              department: 'IT',
              projects: [
                {
                  name: 'Project Sigma',
                  description:
                    'Developing new software for colleagues, improving their work',
                  status: 'In progress',
                  teams: [
                    {
                      team_name: 'Dream Team',
                      team_leader: {
                        name: 'Oksana Mavets',
                        title: 'Team Leader',
                        email: 'oks.mavets@gmail.com',
                      },
                      team_members: [
                        {
                          name: 'Kristina Surovaya',
                          title:
                            'Senior Software Developer',
                          email: 'kris.tina@gmail.com',
                          skills: [
                            'Java',
                            ' Python',
                            ' SQL',
                          ],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Very Interesting project A',
                              technologies: [
                                'Java',
                                ' MongoDB',
                                ' Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Svitlana Umanets',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Olga Sharog',
                                  title: 'QA',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {
    // ↙ сюди вводимо JSON дані

    layout: 'bio',

    page: {
      title: 'CV * Bio',
      big: true,
    },

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title: 'On the Electrodynamics of Moving Bodies',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
      {
        title:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year: 1905,
        publisher: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name: 'Mileva Marić',
        relationship: 'First wife',
        years: '1903-1919',
      },
      {
        name: 'Elsa Einstein',
        relationship:
          "Second wife, also Einstein's first cousin",
        years: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    // ↙ сюди вводимо JSON дані

    layout: 'program',

    page: {
      title: 'Program',
      big: true,
    },

    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// ================================================================
router.get('/web', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('web', {
    // ↙ сюди вводимо JSON дані

    layout: 'web',

    page: {
      title: 'Web',
      big: true,
    },

    web: {
      languages: [
        {
          name: 'HTML',
          version: 'HTML5',
          description:
            'Hypertext Markup Language is the standard markup language for creating web pages and web applications.',
          elements: [
            {
              name: 'div',
              description:
                'Defines a division or a section in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
            {
              name: 'p',
              description:
                'Defines a paragraph in an HTML document.',
              attributes: [
                {
                  name: 'id',
                  description:
                    'Specifies a unique id for an HTML element.',
                },
                {
                  name: 'class',
                  description:
                    'Specifies one or more class names for an HTML element.',
                },
              ],
            },
          ],
        },
        {
          name: 'CSS',
          version: 'CSS3',
          description:
            'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in HTML or XML.',
          properties: [
            {
              name: 'color',
              description: 'Sets the color of the text.',
              values: [
                {
                  value: 'red',
                  description:
                    'Sets the text color to red.',
                },
                {
                  value: 'blue',
                  description:
                    'Sets the text color to blue.',
                },
              ],
            },
            {
              name: 'background-color',
              description:
                'Sets the background color of an element.',
              values: [
                {
                  value: 'white',
                  description:
                    'Sets the background color to white.',
                },
                {
                  value: 'black',
                  description:
                    'Sets the background color to black.',
                },
              ],
            },
          ],
        },
        {
          name: 'JavaScript',
          version: 'ES6',
          description:
            'JavaScript is a programming language used to create interactive effects within web browsers.',
          functions: [
            {
              name: 'alert()',
              description:
                'Displays an alert box with a specified message and an OK button.',
              parameters: [
                {
                  name: 'message',
                  type: 'string',
                  description:
                    'The message to display in the alert box.',
                },
              ],
            },
            {
              name: 'getElementById()',
              description:
                'Returns the element with the specified ID.',
              parameters: [
                {
                  name: 'id',
                  type: 'string',
                  description:
                    'The ID of the element to find.',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

router.get('/js', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('js', {
    // ↙ сюди вводимо JSON дані

    layout: 'js',

    page: {
      title: 'JS',
      big: true,
    },

    name: 'JavaScript',
    description:
      'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
    history: {
      year: 1995,
      founder: 'Brendan Eich',
    },
    types: [
      'Number',
      'String',
      'Boolean',
      'Null',
      'Undefined',
      'Symbol',
      'Object',
    ],
    syntax: {
      variables: ['var', 'let', 'const'],
      functions: ['function'],
      conditionals: ['if', 'else', 'switch'],
      loops: ['for', 'while', 'do-while'],
      classes: ['class'],
    },
    features: [
      'First-class functions',
      'Closures',
      'Dynamic typing',
      'Prototype-based inheritance',
      'Asynchronous programming with Promises and async/await',
      'Modules with import/export statements',
    ],
    libraries: [
      'jQuery',
      'React',
      'Angular',
      'Vue',
      'Node.js',
      'Express.js',
      'Lodash',
      'Moment.js',
    ],
    tools: [
      'Babel',
      'Webpack',
      'ESLint',
      'Jest',
      'Mocha',
      'Chai',
      'Selenium',
      'Cypress',
    ],
    community: [
      {
        name: 'Stack Overflow',
        type: 'forum',
      },
      {
        name: 'JavaScript Weekly',
        type: 'newsletter',
      },
      {
        name: 'The Changelog',
        type: 'podcast',
      },
      {
        name: 'CSS-Tricks',
        type: 'blog',
      },
    ],
  })
})

// ================================================================

router.get('/car', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('car', {
    // ↙ сюди вводимо JSON дані

    layout: 'car',

    page: {
      title: 'Car',
      big: true,
    },

    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'silver',
    features: {
      interior: {
        seats: {
          material: 'leather',
          color: 'black',
          heated: true,
          ventilated: true,
        },
        dashboard: {
          material: 'plastic',
          color: 'black',
          display: {
            type: 'LCD',
            size: 10.1,
            resolution: '1280x720',
            touchscreen: true,
          },
        },
        audio: {
          system: 'JBL',
          speakers: 8,
          subwoofer: true,
          bluetooth: true,
          USB: true,
        },
      },
      exterior: {
        wheels: {
          size: 18,
          type: 'alloy',
          color: 'silver',
        },
        headlights: {
          type: 'LED',
          brightness: 'high',
          automatic: true,
        },
        sunroof: {
          type: 'panoramic',
          size: 'large',
          automatic: true,
        },
      },
      safety: {
        airbags: {
          front: 2,
          side: 2,
          knee: 2,
          rear: 2,
        },
        assistance: {
          blind_spot_monitoring: true,
          rear_cross_traffic_alert: true,
          lane_departure_warning: true,
          adaptive_cruise_control: true,
          collision_warning: true,
        },
      },
    },
    engine: {
      type: 'gasoline',
      displacement: 2.5,
      horsepower: 206,
      torque: 186,
      transmission: {
        type: 'automatic',
        gears: 8,
      },
    },
    fuel_economy: {
      city: 28,
      highway: 39,
      combined: 32,
    },
    price: {
      base: 25900,
      destination: 995,
      options: {
        navigation: 1200,
        moonroof: 800,
        premium_paint: 595,
      },
      total: 28990,
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/mac', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('mac', {
    // ↙ сюди вводимо JSON дані

    layout: 'mac',

    page: {
      title: 'Mac',
      big: true,
    },

    name: 'Apple MacBook Pro',
    description: 'The ultimate notebook for power users',
    price: 1999.99,
    category: 'Computers & Tablets',
    features: {
      processor: {
        brand: 'Intel',
        model: 'Core i9',
        speed: '2.3 GHz',
        cores: 8,
        cache: '16 MB',
      },
      memory: {
        type: 'DDR4',
        size: '32 GB',
        speed: '2666 MHz',
      },
      storage: {
        type: 'SSD',
        size: '1 TB',
      },
      display: {
        size: '16 inches',
        resolution: '3072x1920',
        technology: 'Retina',
        color_space: 'P3',
        brightness: '500 nits',
        refresh_rate: '60 Hz',
      },
      graphics: {
        brand: 'AMD',
        model: 'Radeon Pro 5500M',
        memory: '4 GB GDDR6',
      },
      ports: [
        {
          type: 'Thunderbolt 3',
          count: 4,
          features: [
            'Charging',
            'DisplayPort',
            'Thunderbolt (up to 40 Gbps)',
            'USB 3.1 Gen 2 (up to 10 Gbps)',
          ],
        },
        {
          type: 'HDMI',
          count: 1,
        },
      ],
      battery: {
        type: 'Lithium Polymer',
        capacity: '100 Wh',
        life: 'Up to 11 hours',
      },
      weight: '4.3 pounds',
      dimensions: {
        height: '0.64 inch',
        width: '14.09 inches',
        depth: '9.68 inches',
      },
      operating_system: 'macOS',
      accessories: [
        {
          name: 'Apple Magic Keyboard',
          price: 99.99,
        },
        {
          name: 'Apple Magic Mouse 2',
          price: 79.99,
        },
        {
          name: 'USB-C to USB Adapter',
          price: 19.99,
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/facebook', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('facebook', {
    // ↙ сюди вводимо JSON дані

    layout: 'facebook',

    page: {
      title: 'Facebook',
      big: true,
    },

    name: 'Facebook',
    users: [
      {
        id: 1,
        name: 'John Doe',
        gender: 'Male',
        age: 30,
        friends: [
          {
            id: 2,
            name: 'Jane Smith',
            gender: 'Female',
            age: 27,
            mutual_friends: [
              {
                id: 4,
                name: 'Samantha Lee',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 5,
            name: 'Mike Williams',
            gender: 'Male',
            age: 28,
            mutual_friends: [
              {
                id: 7,
                name: 'David Kim',
                gender: 'Male',
                age: 29,
              },
            ],
          },
        ],
        groups: [
          {
            id: 1,
            name: 'Hiking Enthusiasts',
            description:
              'A group for people who love hiking and the great outdoors',
            members: [
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
          {
            id: 2,
            name: 'Foodies United',
            description:
              'A group for food lovers to share recipes and restaurant recommendations',
            members: [
              {
                id: 5,
                name: 'Mike Williams',
                gender: 'Male',
                age: 28,
              },
              {
                id: 8,
                name: 'Sarah Johnson',
                gender: 'Female',
                age: 25,
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: 'Amy Lee',
        gender: 'Female',
        age: 30,
        friends: [
          {
            id: 15,
            name: 'Peter Kim',
            gender: 'Male',
            age: 32,
            mutual_friends: [
              {
                id: 17,
                name: 'David Chen',
                gender: 'Male',
                age: 33,
              },
              {
                id: 19,
                name: 'Erica Wong',
                gender: 'Female',
                age: 29,
                mutual_friends: [
                  {
                    id: 20,
                    name: 'Alex Lee',
                    gender: 'Male',
                    age: 31,
                  },
                ],
              },
            ],
            groups: [
              {
                id: 3,
                name: 'Travel Addicts',
                description:
                  'A group for people who love to travel and explore new places',
                members: [
                  {
                    id: 22,
                    name: 'Jackie Chen',
                    gender: 'Female',
                    age: 26,
                  },
                ],
              },
              {
                id: 4,
                name: 'Pet Lovers',
                description:
                  'A group for people who love their furry friends',
                members: [
                  {
                    id: 16,
                    name: 'Amy Lee',
                    gender: 'Female',
                    age: 30,
                  },
                  {
                    id: 25,
                    name: 'John Smith',
                    gender: 'Male',
                    age: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
