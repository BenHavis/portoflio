// app/page.tsx
import { FC } from "react";
import styles from "./page.module.css";
import About from "@components/about/page";
import AboutMe from "@/app/aboutme/page";
import ProjectsPage from "./projects/page";
import AnimatedSection from "@components/AnimatedSection";


const Home: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundAnimation} />

      <AnimatedSection className={styles.hero}>
        <About />
      </AnimatedSection>

      <AnimatedSection id="aboutme" animateOnScroll>
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection id="projects" animateOnScroll>
        <ProjectsPage />
      </AnimatedSection>

      <AnimatedSection className={styles.experience} animateOnScroll>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        <div className={styles.timeline}>{/* Work experience timeline */}</div>
      </AnimatedSection>

      <AnimatedSection className={styles.contact} id="contact" animateOnScroll>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.contactInfo}>
          {/* Contact information or form */}
        </div>
      </AnimatedSection>
    </main>
  );
};

export default Home;
