import media from '@utils/media';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.active};

  ${media.tablet`
  font-size: 3rem;
  `}
`;

export const HeaderDiv = styled.div`
  > :nth-child(5) {
    padding-right: 1rem;
  }
`;

export const DescriptionDiv = styled.div``;
