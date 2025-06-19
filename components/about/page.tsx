// components/about/About.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './about.module.css'
import codingIllustration from '@assets/coding.svg'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.gridPattern}>
        {[...Array(25)].map((_, i) => (
          <div key={i} className={styles.gridItem} />
        ))}
      </div>
      
      <div className={styles.glowOrb} />
      
      <div className={styles.content}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.introText}>
            <span className={styles.greeting}>Hello World_</span>
            <h1 className={styles.title}>
              I&apos;m Ben
              <span className={styles.highlight}>Full-Stack Developer</span>
            </h1>
          </div>
          
          <p className={styles.description}>
            Crafting digital experiences through elegant code and creative solutions.
            Let&apos;s build something extraordinary together.
          </p>

          <div className={styles.statGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.primaryButton}>
              <span className={styles.buttonContent}>
                Let&apos;s Collaborate
                <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            <Link href="/projects" className={styles.secondaryButton}>
              <span className={styles.buttonContent}>View Projects</span>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <Image
              src={codingIllustration}
              alt="coding illustration"
              width={600}
              height={600}
              priority
              className={styles.mainImage}
            />
            <div className={styles.imageBg} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}