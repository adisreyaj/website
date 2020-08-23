import Link from 'next/link';

import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles['header-container'], 'box-layout'].join(' ')}>
        <div className={styles.branding}>
          <img src="/sreyaj.svg" alt="Adithya Sreyaj" height="24" />
        </div>
        <div className={styles['mobile-menu__icon']}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
          </svg>
        </div>
        <nav className={styles['main-nav']}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
