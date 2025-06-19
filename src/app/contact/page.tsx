'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={styles.contactPage}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.description}>
        Feel free to reach out to me for opportunities, collaboration, or just to connect!
      </p>

      {submitted ? (
        <p className={styles.confirmation}>Thanks! Your message has been sent.</p>
      ) : (
        <form
          className={styles.form}
          action="https://formspree.io/f/xwpbnkjd"
          method="POST"
          onSubmit={() => setSubmitted(true)}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            rows={5}
            required
          ></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      )}
    </section>
  );
};

export default ContactPage;
