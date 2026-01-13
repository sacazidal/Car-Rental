import { v4 } from 'uuid';
import { FooterNavbar, Navbar } from '../../interfaces/navbar';

export const navbarItems: Navbar[] = [
  {
    id: v4(),
    text: 'Home',
    link: '',
  },
  {
    id: v4(),
    text: 'Vehicles',
    link: 'vehicles',
  },
  {
    id: v4(),
    text: 'Details',
    link: 'car-details',
  },
  {
    id: v4(),
    text: 'About Us',
    link: 'about-us',
  },
  {
    id: v4(),
    text: 'Contact Us',
    link: 'contact-us',
  },
];

export const footerNavbarItems: FooterNavbar[] = [
  {
    id: v4(),
    title: 'Useful links',
    items: [
      {
        id: v4(),
        text: 'About us',
        link: '/about-us',
      },
      {
        id: v4(),
        text: 'Contact us',
        link: '/contact-us',
      },
      {
        id: v4(),
        text: 'Gallery',
        link: '',
      },
      {
        id: v4(),
        text: 'Blog',
        link: '',
      },
      {
        id: v4(),
        text: 'F.A.Q',
        link: '',
      },
    ],
  },
  {
    id: v4(),
    title: 'Vehicles',
    items: [
      {
        id: v4(),
        text: 'Sedan',
        link: '',
      },
      {
        id: v4(),
        text: 'Cabriolet',
        link: '',
      },
      {
        id: v4(),
        text: 'Pickup',
        link: '',
      },
      {
        id: v4(),
        text: 'Minivan',
        link: '',
      },
      {
        id: v4(),
        text: 'SUV',
        link: '',
      },
    ],
  },
];
