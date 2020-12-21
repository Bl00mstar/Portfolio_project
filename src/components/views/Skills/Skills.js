import React, { useState, useEffect } from 'react';
import { divideText, divideParagraph } from '@utils/TextTemplates';
import letterVariants from '@utils/letterVariants';
import Paragraph from '@components/common/Paragraph/Paragraph';

import { MotionSpan, HeaderDiv, DescriptionDiv } from './SkillsLayout';

const Skills = () => {
  const [loadingTitle, setLoadingTitle] = useState(true);
  const [loadingDescription, setLoadingDescription] = useState(true);
  const [title] = useState('About me');
  const [renderedText, setRenderedText] = useState([]);
  const [renderedParagraphs, setRenderedParagraphs] = useState([]);
  const [description] = useState(['asdfasdf', 'sdfasdggffd', 'gfiawerubv']);

  useEffect(() => {
    let textValue = divideText(title);
    setRenderedText((renderedText) => [...renderedText, textValue]);
    let paragraphValue = divideParagraph(description);
    setRenderedParagraphs((renderedParagraphs) => [
      ...renderedParagraphs,
      paragraphValue,
    ]);
  }, [title, description]);

  useEffect(() => {
    setLoadingTitle(false);
  }, [renderedText]);

  useEffect(() => {
    setLoadingDescription(false);
  }, [renderedParagraphs]);

  return (
    <>
      <HeaderDiv>
        {!loadingTitle ? (
          renderedText[0].map(({ id, letter, delay }) => (
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
          ))
        ) : (
          <>loading</>
        )}
      </HeaderDiv>
      <DescriptionDiv>
        {!loadingDescription ? (
          renderedParagraphs[0].map(({ id, text, delay }) => (
            <Paragraph key={id} delay={delay}>
              {text}
            </Paragraph>
          ))
        ) : (
          <>loading</>
        )}
      </DescriptionDiv>
    </>
  );
};

export default Skills;
