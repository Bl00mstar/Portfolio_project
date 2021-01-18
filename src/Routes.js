import React from 'react';
import Home from '@components/views/Home';
import Contact from '@components/views/Contact';
import About from '@components/views/About';
import NotFound from '@components/views/NotFound';

import {
  faSwatchbook,
  faHome,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

export const routes = [
  {
    description: 'Home',
    path: '/',
    icon: faHome,
    element: <Home />,
    type: 'routing',
  },
  {
    description: 'About',
    path: '/about',
    icon: faSwatchbook,
    element: <About />,
    type: 'routing',
  },
  {
    description: 'Contact',
    path: '/contact',
    icon: faMailBulk,
    element: <Contact/>,
    type: 'routing',
  },

  {
    description: 'NotFound',
    path: '/*',
    element: <NotFound />,
    type: 'public',
  },
];
