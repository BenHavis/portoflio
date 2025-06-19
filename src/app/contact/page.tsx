'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';

const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpbnkjd");

  return (
    <section className={styles.contactPage}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.description}>
        Feel free to reach out to me for opportunities, collaboration, or just to connect!
      </p>

      {state.succeeded ? (
        <p className={styles.confirmation}>Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={5}
            className={styles.textarea}
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" className={styles.button} disabled={state.submitting}>
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
