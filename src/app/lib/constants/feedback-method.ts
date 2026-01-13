import { v4 } from 'uuid';
import { FeedbackMethod } from '../../interfaces/feedback-method';

export const feedbackMethods: FeedbackMethod[] = [
  {
    id: v4(),
    title: 'Address',
    text: 'Oxford Ave. Cary, NC 27511',
    href: 'https://yagla.tv/cU6zy7w',
    image: '/assets/images/Address.svg',
  },
  {
    id: v4(),
    title: 'Email',
    text: 'nwiger@yahoo.com',
    href: 'mailto:nwiger@yahoo.com',
    image: '/assets/images/Mail.svg',
  },
  {
    id: v4(),
    title: 'Phone',
    text: '+537 547-6401',
    href: 'tel:+5375476401',
    image: '/assets/images/FooterPhone.svg',
  },
  {
    id: v4(),
    title: 'Phone',
    text: '+996 247-1680',
    href: 'tel:+9962471680',
    image: '/assets/images/Phone.svg',
  },
];
