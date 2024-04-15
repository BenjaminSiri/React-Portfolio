import React, { useRef, useState } from 'react';

import styles from '../styles/contact.module.css';

import emailjs from '@emailjs/browser'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if(!name || !email || !message) {
      setError(true);
      return;
    }

    emailjs
      .sendForm('service_b5rcicl', 'template_eb4iwng', form.current, {
        publicKey: 'nhm04VAHr5Khl32em',
      })
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  const tryAgain = (
    <p style={{color: "red"}}>Please fill in all fields</p>
  )

  if(sent) {
    return (
      <div className={styles.contact}>
        <h1>Message Sent!</h1>
      </div>
    );
  }
  return (
    <div className={styles.contact}>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.contactSub}>
          <h2>Name</h2>
          <input className={styles.contactInput} onChange={onNameChange} type="text" name="from_name" />
        </div>
        <div className={styles.contactSub}>
          <h2>Email</h2>
          <input className={styles.contactInput} onChange={onEmailChange} type="text" name="reply_to" />
        </div>
        <div className={styles.contactSub}>
          <h2>Message</h2>
          <textarea className={styles.textArea} onChange={onMessageChange} name="message" />
        </div>
        <button className={styles.sendButton} type="submit">Submit</button>
      </form>
      {error ? tryAgain : <></>}
    </div>
  );
}

export default Contact;