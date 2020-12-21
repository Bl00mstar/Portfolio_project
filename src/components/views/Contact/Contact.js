import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import letterVariants from '@utils/letterVariants';
import emailjs from 'emailjs-com';
import { divideText } from '@utils/TextTemplates';
import { user, service, template } from '../../../email';

import {
  ErrorInput,
  StyledTextArea,
  StyledInput,
  StyledForm,
  TextAreaDiv,
  MotionSpan,
  HeaderDiv,
  MessageInfo,
  Button,
} from './ContactLayout';

const ErrorVariants = {
  initial: { width: '1vw' },
  animate: { width: '80%', transition: { duration: 0.5 } },
  exit: { width: '1vw' },
};

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });
  const [isSent, setIsSent] = useState(false);
  const [topic] = useState('Contact me');
  const [loadingTitle, setLoadingTitle] = useState(true);
  const [renderedText, setRenderedText] = useState([]);

  const sendFormConfirm = () => {
    setIsSent(!isSent);
  };

  useEffect(() => {
    setLoadingTitle(false);
  }, [renderedText]);

  useEffect(() => {
    let titleValue = divideText(topic);
    setRenderedText((renderedText) => [...renderedText, titleValue]);
  }, [topic]);

  const onSubmit = (data, e) => {
    emailjs.send(service, template, data, user).then(
      (result) => {
        sendFormConfirm();
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {isSent && <MessageInfo>Message Sent!</MessageInfo>}
        <div>
          <StyledInput
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            placeholder="Email"
            type="text"
            autoComplete="off"
            name="email"
            ref={register({
              required: true,
              minLength: 6,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          {errors.email && (
            <ErrorInput
              initial="initial"
              animate="animate"
              exit="exit"
              variants={ErrorVariants}
            />
          )}
        </div>
        <div>
          <StyledInput
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.2,
            }}
            placeholder="Subject"
            type="text"
            autoComplete="off"
            name="subject"
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
          {errors.subject && (
            <ErrorInput
              initial="initial"
              animate="animate"
              exit="exit"
              variants={ErrorVariants}
            />
          )}
        </div>
        <TextAreaDiv>
          <StyledTextArea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.4,
            }}
            placeholder="Message"
            autoComplete="off"
            name="message"
            ref={register({
              required: true,
              minLength: 10,
            })}
          />
          {errors.message && (
            <ErrorInput
              initial="initial"
              animate="animate"
              exit="exit"
              variants={ErrorVariants}
            />
          )}
        </TextAreaDiv>
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          type="submit"
        >
          Submit!
        </Button>
      </StyledForm>
    </>
  );
};

export default Contact;
