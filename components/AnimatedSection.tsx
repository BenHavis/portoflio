// components/AnimatedSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  animateOnScroll?: boolean
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  id,
  animateOnScroll = false 
}: AnimatedSectionProps) => {
  const animation = animateOnScroll ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, delay }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay }
  }

  return (
    <motion.section 
      {...animation}
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection