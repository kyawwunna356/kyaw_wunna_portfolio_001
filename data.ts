export interface Project {
    id: number,
    name: string,
    description: string,
    techs: string[],
    images: string[],
    link: string,
}



export const ProjectsData = [
  {
    id: 1,
    name: "CONNECT",
    description:
      "a mern social-media app like facebook with jwt authetication. The projects use formik for form-validation, MUI for the theme and redux-toolkit for state-management. Users can create an account, add friends and connect with each others. They can also upload photos, like, comment. Most impotantly they can chat with friends.The chats are real-time using socket.io but unfortunately newsfeed is not ",
    images: ['/img/newfeed.png'],
    techs: ['react', 'express','node','mongodb','MUI','formik','redux-toolkit','socket.io'],
    link: 'https://connect-app-frontend.vercel.app/home'
  },

  {
    id: 2,
    name: "Apple-redesign",
    description:
      "This project was a redesign of the Apple website, developed using Next.js as the frontend framework, Tailwind CSS for styling, Sanity as the headless CMS, typescipt for type safety and integrated with Stripe for e-commerce functionality. The project aimed to modernize the user experience and make it more intuitive for users to navigate and purchase products. The website features a sleek and minimalist design, with seamless integrations for adding and managing products, and a secure checkout process powered by Stripe. The use of Next.js, Tailwind CSS, Sanity, and Stripe allowed for a fast, scalable, and highly customizable website that meets the needs of users and businesses alike.",
     images: ['/img/apple-redesign.png'],
    techs: ['Next', 'tailwind','typescript', 'sanity-studio','redux-toolkit','stripe'],
    link: 'https://apple-redesign-frontend.vercel.app/'
  },
  {
    id: 3,
    name: "REST-Countries",
    description:
      "A   web application built with Next.js and Chakra UI that allows users to search for flags and filter them based on various criteria using a REST API. The application provides a user-friendly interface that enables users to easily navigate through the available flags and filter them by country, region, or other attributes. With its responsive design, the application is accessible on both desktop and mobile devices, making it easy for users to access the information they need from anywhere. The combination of Next.js and Chakra UI provides a powerful and flexible development platform, enabling developers to build robust and scalable applications with ease. ",
    images: ['/img/rest-countries.png'],
    techs: ['next', 'Chakra UI','rest-api'],
    link: 'https://rest-countries-5h0tew5oq-kyawwunna356.vercel.app/'
  },
];


export const techs = [
  'react','next','typescript','node','express','mongodb','redux toolkit','sanity',
]

export const knowledge = [
  'data structures','algorithms','design patterns'
]

export const certs = [
  'JLPT N4', 'ITPEC IP/FE'
]