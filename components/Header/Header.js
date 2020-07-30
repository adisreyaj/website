import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles['header-container'], 'box-layout'].join(' ')}>
        <div className={styles.branding}>
          <img src="/sreyaj.svg" alt="Adithya Sreyaj" height="24" />
        </div>

        <nav className={styles['main-nav']}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
