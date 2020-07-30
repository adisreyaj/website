import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p>Hi I'm,</p>
          <h1>Adithya Sreyaj</h1>
          <div className={styles['hero__meta']}>
            <p>
              I love to code beautiful applications for the world. When I am not
              coding, I'll be thinking of Ideas and reading articles or blogs
              about coding.
            </p>
            <br />
            <br />
            <p>
              I work as a UI Engineer at{' '}
              <span className="emphasis">Hypersonix</span>
            </p>
          </div>
          <SocialIconsHero />
        </section>
        <section className={styles.about}></section>
        <section className={styles.skills}></section>
        <section className={styles.projects}></section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

const SocialIconsHero = () => {
  return (
    <div className={styles['hero__socials']}>
      <ul>
        <li>
          <img src="/social/github.svg" alt="Github" height="24" width="24" />
        </li>
        <li>
          <img
            src="/social/twitter.svg"
            alt="Twitter Profile"
            height="24"
            width="24"
          />
        </li>
        <li>
          <img
            src="/social/linkedin.svg"
            alt="Linkedin Profile"
            height="24"
            width="24"
          />
        </li>
      </ul>
    </div>
  );
};
