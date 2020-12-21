import React, { useEffect, useState } from 'react';
import ButtonLink from '@components/common/ButtonLink/ButtonLink';
import letterVariants from '@utils/letterVariants';
import { divideText } from '@utils/TextTemplates';
import { Mention, MotionSpan } from './HomeLayout';

const Home = () => {
  const [text] = useState([
    { first: 'Hej' },
    { second: 'Walka z AWSem' },
    { third: 'czy to rano czy to dzien' },
    { four: '*w nocy' },
  ]);

  const [renderedText, setRenderedText] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    Object.entries(text).forEach(([_, obj]) => {
      let key = Object.keys(obj)[0];
      let value = divideText(obj[key]);
      setRenderedText((renderedText) => [...renderedText, { value }]);
    });
  }, [text]);

  useEffect(() => {
    renderedText.map((el) => {
      contentIntoDiv(el);
      return null;
    });
    setLoading(false);
  }, [renderedText]);

  const contentIntoDiv = (el) => {
    let divContent = (
      <div>
        {el.value.map(({ id, letter, delay }) => (
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
      </div>
    );

    setContent((data) => [...data, divContent]);
  };

  return (
    <>
      {loading ? <></> : <>{content}</>}
      <ButtonLink title={'Contact Me!'} path={'/contact'} />
      <Mention
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: 'spring',
          stiffness: 100,
        }}
      ></Mention>
    </>
  );
};

export default Home;
