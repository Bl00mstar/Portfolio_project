import React, { useState } from 'react';
import { faGithub, faGrav } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import NavLinkIcon from '../../features/NavLinkIcon/NavLinkIcon';
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
      {isMobile && (
        <Wrapper>
          <BurgerMenu onClick={toggle}>
            <span />
            <span />
            <span />
          </BurgerMenu>
          <AnimatePresence>
            {isOpen && (
              <>
                <MobileList>
                  {menuIcons.map(({ icon, description, path }, key) => (
                    <StyledNavLink
                      key={key}
                      icon={faHome}
                      to={path}
                      description={description}
                    >
                      <StyledNavLink exact to={path}>
                        <StyledFontAwesomeIcon icon={icon} />
                      </StyledNavLink>
                      <StyledNavLink exact to={path}>
                        <p>{description}</p>
                      </StyledNavLink>
                    </StyledNavLink>
                  ))}
                </MobileList>
              </>
            )}
          </AnimatePresence>
        </Wrapper>
      )}
      {!isMobile && (
        <Wrapper
          initial={{ x: '-4vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledNavLink
            exact
            to="/"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MainIcon icon={faGrav} />
          </StyledNavLink>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ul>
              {menuIcons.map(({ icon, description, path }, key) => (
                <NavLinkIcon
                  key={key}
                  icon={icon}
                  to={path}
                  description={description}
                />
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ul>
              <StyledList>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Bl00mstar"
                >
                  <RefLinks icon={faGithub} />
                </a>
              </StyledList>
            </ul>
          </motion.div>
        </Wrapper>
      )}
    </>
  );
};

export default Menu;
