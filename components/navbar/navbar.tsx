import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Ben Havis
        </Link>
        <div className={styles.links}>
          <Link href="/#aboutme" className={styles.link}>
            About
          </Link>
          <Link href="/#projects" className={styles.link}>
            Projects
          </Link>
          <Link href="/#experience" className={styles.link}>
            Experience
          </Link>
          <Link href="/#contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar