import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import emailjs from '@emailjs/browser';
import style from './Contact.module.css';
import showAlert from '../../ShowAlert/ShowAlert';

const  WhatsAppNumber = process.env.REACT_APP_WHATSAPP_NUMBER
const  EmailContact = process.env.REACT_APP_CONTACT_EMAIL

const Contact = () => {
  const form = useRef();

  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');

  const {
    REACT_APP_EMAIL_SERVICE,
    REACT_APP_EMAIL_TEMPLATE,
    REACT_APP_EMAIL_USER,
  } = process.env;

  const generateCaptcha = () => {
    const charsArray =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += charsArray[Math.floor(Math.random() * charsArray.length)];
    }
    setCaptcha(captcha);
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    if (captchaInput !== captcha) {
      setCaptchaInput('');
      return showAlert('código ingresado incorrecto', 'red');
    }

    try {
      await emailjs.sendForm(
        REACT_APP_EMAIL_SERVICE,
        REACT_APP_EMAIL_TEMPLATE,
        form.current,
        REACT_APP_EMAIL_USER
      );
      showAlert('Email enviado correctamente!', 'green');
      form.current.reset();
    } catch (error) {
      console.error('Email failed to send', error);
      showAlert(
        'el email no se pudo enviar, por favor intente más tarde',
        'red'
      );
    }
    setCaptchaInput('');
  };

  return (
    <div className='container'>
      <h2 className={style.title}>Ponerse en contacto</h2>
      <div className={style.contactContainer}>
        <div className={style.contact_container}>
          <article className={style.contact_option}>
            <h3 className={style.contact_link}>Email:</h3>
            <a
              href={`mailto:${EmailContact}`}
              target='_blank'
              rel='noopener noreferrer'
              className={style.icon}
            >
              <i className='bi bi-envelope-at'></i>
            </a>
          </article>

          <article className={style.contact_option}>
            <h3 className={style.contact_link}>WhatsApp:</h3>
            <a
              href={`https://wa.me/${WhatsAppNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              className={style.icon}
            >
              <i className='bi bi-whatsapp ' style={{ width: 32 }}></i>
            </a>
          </article>
        </div>
      </div>

      <Form ref={form} onSubmit={sendEmail} className={style.contactForm}>
        <Form.Group controlId='formName'>
          <Form.Label className={style.form_label}>Nombre completo:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Escribe tu nombre completo'
            required
            className={style.formControl}
            name='name'
          />
        </Form.Group>

        <Form.Group controlId='formEmail'>
          <Form.Label className={style.form_label}>Email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Escribe tu email'
            required
            className={style.formControl}
            name='email'
          />
        </Form.Group>

        <Form.Group controlId='formSubject'>
          <Form.Label className={style.form_label}>Asunto:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Escribe el asunto'
            required
            className={style.formControl}
            name='subject'
          />
        </Form.Group>

        <Form.Group controlId='formMessage'>
          <Form.Label className={style.form_label}>Mensaje:</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            placeholder='Escribe tu mensaje'
            required
            className={style.formControl}
            name='message'
          />
        </Form.Group>

        <Form.Group controlId='formBasicCaptcha'>
          <Form.Label className={style.captchaTitle}>Captcha:</Form.Label>
          <div className={style.captchaContainer}>
            <span className={style.captcha}>{captcha}</span>
            <Button
              variant='outline-secondary'
              onClick={generateCaptcha}
              className={style.reloadButton}
            >
              &#x21bb;
            </Button>
          </div>
          <Form.Control
            type='text'
            placeholder='ingrese el código'
            value={captchaInput}
            onChange={(event) => setCaptchaInput(event.target.value)}
            className={style.captchaInput}
          />
        </Form.Group>
        <Button
          style={{ backgroundColor: '#004b82', borderColor: '#004b82' }}
          type='submit'
          className={style.submitButton}
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
