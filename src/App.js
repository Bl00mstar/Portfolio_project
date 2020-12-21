import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';

import MainLayout from '@layout/MainLayout/MainLayout';
import Content from './components/views/Shared/Content';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const element = useRoutes(routes);

  return (
    <MainLayout>
      <AnimatePresence exitBeforeEnter>
        <Content layoutElement={element} />
      </AnimatePresence>
    </MainLayout>
  );
};

export default App;
