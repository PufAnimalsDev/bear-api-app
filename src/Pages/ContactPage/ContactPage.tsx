import { useState } from 'react';
import { TextField } from '../../components/TextField';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer';
import { TextareaField } from '../../components/TextareaField';
import './ContactPage.scss';

// eslint-disable-next-line max-len
const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emial, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return pattern.test(email);
  };

  const validateNameAndSurname = (name: string) => {
    return name.trim().length >= 4;
  };

  const disableButton = !name || !surname || !emial || !validateEmail(emial) || !message;

  const clearInputs = () => {
    setName('');
    setSurname('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearInputs();
  };

  return (
    <>
      <Header headTitle='Contact' />
      <div className='page-container'>
        <form className='form' onSubmit={handleSubmit}>
          <h2 className='title'>Contact Us!</h2>
          <div className='form__name-surname'>
            <TextField
              name='Name'
              label='Name'
              value={name}
              onChange={setName}
              validateNameAndSurname={validateNameAndSurname}
              required
            />

            <TextField
              name='Surname'
              label='Surname'
              value={surname}
              onChange={setSurname}
              validateNameAndSurname={validateNameAndSurname}
              required
            />
          </div>

          <TextField
            name='Email'
            label='Email'
            value={emial}
            onChange={setEmail}
            validateUrl={validateEmail}
            required
          />

          <TextareaField
            name='Message'
            label='Message'
            value={message}
            onChange={setMessage}
            required
          />

          <div className='field is-grouped'>
            <div className='control'>
              <button type='submit' className='button is-link' disabled={disableButton}>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};
