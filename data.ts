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
    images: ['/img/chat.png','/img/newfeed.png'],
    techs: ['react', 'express','node','mongodb','MUI','formik','redux-toolkit','socket.io'],
    link: 'https://connect-app-frontend.vercel.app/home'
  },

  {
    id: 2,
    name: "Apple-redesign",
    description:
      "This project was a redesign of the Apple website, developed using Next.js as the frontend framework, Tailwind CSS for styling, Sanity as the headless CMS, and integrated with Stripe for e-commerce functionality. The project aimed to modernize the user experience and make it more intuitive for users to navigate and purchase products. The website features a sleek and minimalist design, with seamless integrations for adding and managing products, and a secure checkout process powered by Stripe. The use of Next.js, Tailwind CSS, Sanity, and Stripe allowed for a fast, scalable, and highly customizable website that meets the needs of users and businesses alike.",
     images: ['/img/chat.png','/img/newfeed.png'],
    techs: ['Next', 'tailwind','sanity-studio','redux-toolkit','stripe'],
    link: 'https://connect-app-frontend.vercel.app/home'
  },
  {
    id: 3,
    name: "Spotify",
    description:
      "a mern social-media app like facebook with jwt authetication. The projects use formik for form-validation, MUI for the theme and redux-toolkit for state-management. Users can create an account, add friends and connect with each others. They can also upload photos, like, comment. Most impotantly they can chat with friends.The chats are real-time using socket.io but unfortunately newsfeed is not ",
    images: ['/img/chat.png','/img/newfeed.png'],
    techs: ['react', 'express','node','mongodb','MUI','formik','redux-toolkit','socket.io'],
    link: 'https://connect-app-frontend.vercel.app/home'
  },
];


export const skillsData = [
  'react','next','typescript','node','express','mongodb','redux toolkit','sanity','data structures','algorithms','design patterns','JLPT N4',
]