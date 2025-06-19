'use client';

import React from 'react';
import styles from './contact.module.css';

const ContactPage: React.FC = () => {
  return (
    <section className={styles.contactPage}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.description}>
        Feel free to reach out to me for opportunities, collaboration, or just to connect!
      </p>

      <form
        className={styles.form}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        {/* Required hidden input for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

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
    </section>
  );
};

export default ContactPage;
