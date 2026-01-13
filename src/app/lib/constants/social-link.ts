import { v4 } from 'uuid';
import { SocialLink } from '../../interfaces/social-link';

export const socialLinks: SocialLink[] = [
  {
    id: v4(),
    image: '/assets/images/Facebook.svg',
    text: 'Facebook',
    link: 'https://vk.com/4ch',
  },
  {
    id: v4(),
    image: '/assets/images/Inst.svg',
    text: 'Inst',
    link: 'https://vk.com/imfather',
  },
  {
    id: v4(),
    image: '/assets/images/X.svg',
    text: 'X',
    link: 'https://vk.com/ovsyanochan',
  },
  {
    id: v4(),
    image: '/assets/images/Youtube.svg',
    text: 'Youtube',
    link: 'https://vk.com/russianabsurdcomedies',
  },
];
