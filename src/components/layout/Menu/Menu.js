import React, { useState } from 'react';
import { faGithub, faGrav } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../Routes';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import {
  Wrapper,
  StyledList,
  StyledFontAwesomeIcon,
  MainIcon,
  RefLinks,
  StyledNavLink,
  BurgerMenu,
  MobileList,
} from './MenuLayout';

const menuIcons = routes;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({
    query: '(max-width: 780px)',
  });

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div>asd</div>
    </>
  );
};

export default Menu;
