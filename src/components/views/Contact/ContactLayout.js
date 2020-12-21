import media from '@utils/media';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: relative;
  font-size: 1rem;
  letter-spacing: 4px;
  line-height: 2.5rem;
  display: block;
  text-align: center;
  border: 1px solid #6a5acd;
  color: #6a5acd;
  background-color: transparent;
  border-radius: 0.2rem;
  width: 10rem;
  height: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 1s;
  background-size: 200%;
  background-position: 100% 0;
  background-image: linear-gradient(45deg, #6a5acd 50%, transparent 50%);

  :focus {
    outline: none;
  }

  :hover {
    background-position: 0 100%;
    color: ${({ theme }) => theme.colors.ground};
  }
`;

export const MessageInfo = styled.p`
  color: green;
`;

export const HeaderDiv = styled.div`
  > :nth-child(7) {
    padding-right: 1rem;
  }
`;

export const MotionSpan = styled(motion.span)`
  display: inline-block;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.active};

  ${media.tablet`
  font-size: 3rem;
  `}
`;

export const TextAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 6rem;

  @media (min-width: 780px) and (max-width: 1024px) {
    padding: 0;
  }

  ${media.small`
    padding: 0;
  `}
`;

export const StyledInput = styled(motion.input)`
  width: 80%;
  height: 3rem;
  padding: 1rem;
  margin: 1rem 0 0;
  background-color: ${({ theme }) => theme.colors.form};
  color: ${({ theme }) => theme.colors.icon};
  border: 1px solid ${({ theme }) => theme.colors.form};

  ::placeholder {
    color: ${({ theme }) => theme.colors.icon};
  }
  :focus {
    outline: none;
    color: ${({ theme }) => theme.colors.icon};

    ::placeholder {
      color: transparent;
    }
  }
`;

export const StyledTextArea = styled(motion.textarea)`
  width: 80%;
  height: 5rem;
  padding: 1rem;
  margin: 1rem 0 0;
  resize: none;
  background-color: ${({ theme }) => theme.colors.form};
  color: ${({ theme }) => theme.colors.icon};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.icon};
  }

  :focus {
    color: ${({ theme }) => theme.colors.icon};
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

export const ErrorInput = styled(motion.div)`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.error};
`;
