import React from 'react';

import Home from '@components/views/Home';
import Contact from '@components/views/Contact';
import Skills from '@components/views/Skills';
import NotFound from '@components/views/NotFound';

import { faIgloo } from '@fortawesome/free-solid-svg-icons';

export const routes = [
  {
    description: 'Home',
    path: '/',
    icon: faIgloo,
    element: <Home />,
  },
  {
    description: 'Contact',
    path: '/contact',
    icon: faIgloo,
    element: <div>asdasdsd</div>,
  },
  {
    description: 'Skills',
    path: '/skills',
    icon: faIgloo,
    element: <Skills />,
  },
  {
    description: 'NotFound',
    path: '/notfound',
    element: <NotFound />,
  },
];
