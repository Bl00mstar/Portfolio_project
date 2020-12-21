import React, { useState } from 'react';

import letterVariants from '@utils/letterVariants';

import { AboutTextTemplate } from '@utils/TextTemplates';
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
        <Paragraph delay={1}>siema</Paragraph>
        <Paragraph delay={1.2}>siema2</Paragraph>
        <Paragraph delay={1.4}>test</Paragraph>
        <Paragraph delay={1.6}>test3</Paragraph>
      </DescriptionDiv>
    </>
  );
};

export default Skills;
