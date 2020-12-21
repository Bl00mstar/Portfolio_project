import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionSpan = styled(motion.span)`
  font-size: 3.3rem;

  @media (max-width: 1160px) {
    font-size: 2.7rem;
  }

  @media (min-width: 78px) and (max-width: 885px) {
    font-size: 2.2rem;
  }
`;

export const Mention = styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 10px;
  background-color: ${({ theme }) => theme.colors.menu};
  padding: 5px;

  a {
    color: ${({ theme }) => theme.colors.active};
    text-decoration: none;
  }
`;
