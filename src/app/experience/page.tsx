'use client';

import React from 'react';
import styles from './experience.module.css';

const experiences = [
  {
    title: "Web Developer",
    company: "Convention Data Services / Maritz",
    date: "Oct 2023 – Present",
    achievements: [
      "Led builds for over a dozen high-profile events across web and database layers.",
      "Maintained and enhanced mission-critical registration and lead retrieval platforms.",
      "Provided high-quality support to clients and internal teams, consistently meeting SLAs."
    ]
  },
  {
    title: "Associate Web Developer",
    company: "Convention Data Services",
    date: "Jul 2022 – Oct 2023",
    achievements: [
      "Built and maintained registration websites for enterprise events.",
      "Managed SQL Server databases and optimized business logic using classic ASP and jQuery.",
      "Improved team delivery by streamlining the setup process for new events."
    ]
  }
];

const sideProjects = [
  {
    title: "Upin – Real-World Community Meetup App",
    description:
      "A mobile platform for discovering and hosting local events with location-based access control, Stripe-powered ticketing, and geofenced communities.",
    technologies: ["React Native", "Expo", "Supabase", "PostgreSQL", "Stripe"],
    highlights: [
      "Built a complete ticketing system with Stripe integration and QR code entry.",
      "Implemented geofencing and location verification for secure community access.",
      "Designed Supabase Edge Functions and webhook-based workflows for event-driven logic."
    ]
  }
];

const ExperiencePage: React.FC = () => {
  return (
    <section className={styles.experiencePage}>
      <h1 className={styles.title}>Experience</h1>

      {experiences.map((exp, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.position}>{exp.title}</h2>
          <p className={styles.company}>{exp.company}</p>
          <p className={styles.date}>{exp.date}</p>
          <ul className={styles.list}>
            {exp.achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h1 className={styles.title} style={{ marginTop: "3rem" }}>Side Projects</h1>

      {sideProjects.map((proj, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.position}>{proj.title}</h2>
          <p className={styles.company}>{proj.description}</p>
          <div className={styles.stack}>
            <strong>Tech Stack:</strong> {proj.technologies.join(', ')}
          </div>
          <ul className={styles.list}>
            {proj.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ExperiencePage;
