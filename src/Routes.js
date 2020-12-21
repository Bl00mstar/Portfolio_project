import React from 'react';
import Home from '@components/views/Home';
import Contact from '@components/views/Contact';
import Skills from '@components/views/Skills';
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
    description: 'Skills',
    path: '/skills',
    icon: faSwatchbook,
    element: <Skills />,
    type: 'routing',
  },
  {
    description: 'Contact',
    path: '/contact',
    icon: faMailBulk,
    element: <Contact />,
    type: 'routing',
  },

  {
    description: 'NotFound',
    path: '/*',
    element: <NotFound />,
    type: 'public',
  },
];
