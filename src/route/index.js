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
// Підключаємо роутер до бек-енду
module.exports = router
