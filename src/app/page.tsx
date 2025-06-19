// app/page.tsx
import { FC } from "react";
import styles from "./page.module.css";
import About from "@components/about/page";
import AboutMe from "@/app/aboutme/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import ExperiencePage from "./experience/page";
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

      <AnimatedSection id="experience" animateOnScroll>
        <ExperiencePage />
      </AnimatedSection>

       <AnimatedSection id="contact" animateOnScroll>
        <ContactPage />
      </AnimatedSection>
    </main>
  );
};

export default Home;
