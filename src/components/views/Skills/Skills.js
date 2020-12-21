import React from 'react';

import letterVariants from '@utils/letterVariants';

import { AboutTextTemplate } from '@utils/TextTemplates';
import Asteroid from '@components/common/Asteroid/Asteroid';
import Paragraph from '@components/common/Paragraph/Paragraph';

import { MotionSpan, HeaderDiv, DescriptionDiv } from './SkillsLayout';

const Skills = () => {
  return (
    <>
      <HeaderDiv>
        {AboutTextTemplate.map(({ id, letter, delay }) => (
          <MotionSpan
            key={id}
            initial="hidden"
            animate="visible"
            transition={{
              delay: delay,
              duration: 0.3,
            }}
            variants={letterVariants}
          >
            {letter}
          </MotionSpan>
        ))}
      </HeaderDiv>
      <DescriptionDiv>
        <Paragraph delay={1}>
          I&apos;m a computer science student at WSB in Poznań. <br /> I
          graduated Technical High School for Computer Science.
        </Paragraph>
        <Paragraph delay={1.2}>
          I like reading fantasy and science books, for example Lord of The
          Rings. In free time I like play computer games.
        </Paragraph>
        <Paragraph delay={1.4}>
          I spend a lot of time learning the programming. For some time it has
          become my passion, I try to conscientiosly learn new things.
        </Paragraph>
        <Paragraph delay={1.6}>
          I&apos;m determined to find my first job as a web developer.
        </Paragraph>
      </DescriptionDiv>
    </>
  );
};

export default Skills;
