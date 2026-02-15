import type { menuT } from '@/data/menus.ts';

export const menu : menuT = {
  heading: 'Main',
  key: 'main',
  path: '/',
  items: [
    {
      title: "Hours",
      path: "/hours",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Membership",
      path: "/membership",
    },
    {
      title: "Swim Team",
      path: '/swim-team'
    },  
    {
      title: "Lessons",
      path: "/swim-lessons",
    },
    {
      title: "Pool Rules",
      path: "/pool-rules",
    },
    {
      title: "Eats",
      path: "/eats",
    }
  ]
};


export const contact : menuT = {
  heading: 'Learn more',
  key: 'contact',
  path: '',
  items: [
    {
      title: "Jobs",
      path: "https://forms.gle/gw49v9RjspY5n3qN8"
    },
    {
      title: "Donate",
      path: "/donate",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },    
    {
      title: "Facebook",
      path: "https://www.facebook.com/ArdenSwimClub/",
    },
    {
      title: "Venmo",
      path: "https://venmo.com/Arden-Swim-Club?txn=pay",
    }
  ]
}

export const footerMain : menuT = {
  path: '',
  heading: menu.heading,
  key: 'footer',
  items: menu.items.filter(o=>o.path != '/swim-team')
}