import React, { useState } from 'react';
import styled from 'styled-components';
import NavLinkIcon from '../../features/NavLinkIcon/NavLinkIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKickstarter } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../Routes';

import { motion, AnimatePresence } from 'framer-motion';
import media from '@utils/media';
import { useMediaQuery } from 'react-responsive';

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
                    <StyledList
                      key={key}
                      whileHover={{
                        scale: 1.2,
                        transition: { type: 'spring', stiffness: 400 },
                      }}
                      initial={{ x: -1000 }}
                      animate={{ x: 0, transition: { duration: 1 } }}
                      exit={{ x: -1000, transition: { duration: 1 } }}
                    >
                      <StyledNavLink path={path}>
                        <StyledFontAwesomeIcon icon={icon} />
                      </StyledNavLink>
                      <StyledNavLink path={path}>
                        <p>{description}</p>
                      </StyledNavLink>
                    </StyledList>
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
          <div>
            <StyledNavLink
              exact
              to="/"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MainIcon icon={faKickstarter} />
            </StyledNavLink>
          </div>
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ul>
              {/* {menuIcons.map(({ icon, description, path }, key) => (
                <NavLinkIcon
                  key={key}
                  icon={icon}
                  path={path}
                  description={description}
                />
              ))} */}
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

const Wrapper = styled(motion.header)`
  width: 64px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.menu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
  }

  > div {
    padding: 2rem 0;

    ${media.tablet`
      padding: 0;
  `}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0 0;
    text-align: center;

    ${media.tablet`
      display: flex;
    `}
  }

  ${media.tablet`
    flex-direction: row-reverse;
    width: 100vw;
    height: 64px;
    position: fixed;
  `}
`;

const StyledList = styled(motion.li)`
  padding: 0.6rem 0;
  height: 4rem;
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.tablet`
      padding: 0.6rem 1rem;
      align-items: center;
    `}
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.icon};
`;

const MainIcon = styled(StyledFontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.active};
`;

const RefLinks = styled(StyledFontAwesomeIcon)`
  :hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.icon};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.active};

    > * {
      color: ${({ theme }) => theme.colors.active};
    }
  }
`;

const BurgerMenu = styled(motion.div)`
  width: 3rem;
  cursor: pointer;
  height: 2rem;
  text-align: center;
  margin-right: 1rem;

  :hover {
    > * {
      background: ${({ theme }) => theme.colors.active};
    }
  }

  span {
    margin-top: 0.4rem;
    display: block;
    width: 100%;
    border-radius: 2px;
    height: 0.2rem;
    background: #fff;
  }
`;

const MobileList = styled(motion.ul)`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;

export default Menu;
