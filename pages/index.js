import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Header';
import { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ProjectItem from '../components/ProjectItem/ProjectItem';

const projects = [
  {
    image: 'Xpense',
    title: 'Xpense Tracker',
    subtitle: 'Expense tracker app',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
    ],
  },
  {
    image: 'Best-of-JS',
    title: 'Best of JS',
    subtitle: 'Best JS Repositories app UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
    ],
  },
  {
    image: 'Moovee',
    title: 'Moovee',
    subtitle: 'Movie curation app UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'Redux',
        logo: 'redux',
      },
      {
        name: 'TypeScript',
        logo: 'typescript',
      },
    ],
  },
  {
    image: 'Payments',
    title: 'Payments UI',
    subtitle: 'Payments page interaction UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
    ],
  },
  {
    image: 'Pill-Box',
    title: 'IoT Pill Box',
    subtitle: 'IoT Medicine tracker app UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'TypeScript',
        logo: 'typescript',
      },
    ],
  },
  {
    image: 'Quik-Jobs',
    title: 'Quik Jobs',
    subtitle: 'Job Finder app UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
    ],
  },
  {
    image: 'Storage',
    title: 'Fyl Manager',
    subtitle: 'File Manager app UI',
    stack: [
      {
        name: 'React Native',
        logo: 'react-native',
      },
      {
        name: 'Expo',
        logo: 'expo',
      },
      {
        name: 'JavaScript',
        logo: 'javascript',
      },
    ],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adithya Sreyaj - Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={[styles.hero, 'js-hero'].join(' ')}>
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
              I work as a UI Engineer at &nbsp;
              <span className="emphasis">Hypersonix</span>
            </p>
          </div>
          <SocialIconsHero />
        </section>
        <section className={styles.about}></section>
        <section className={styles.skills}></section>
        <section className={styles.projects}>
          <SectionHeading
            title="Stuffs I've done"
            subtitle="Here are some of the projects that I've done during my free time. You can find mock UIs, Full-stack Web Applications, Mobile Applications and more"
          />
          <div>
            {projects.map((item, i) => (
              <ProjectItem {...item} index={i} key={i} />
            ))}
          </div>
        </section>
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
          <img src="/social/github.svg" alt="Github" height="22" width="22" />
        </li>
        <li>
          <img
            src="/social/twitter.svg"
            alt="Twitter Profile"
            height="22"
            width="22"
          />
        </li>
        <li>
          <img
            src="/social/linkedin.svg"
            alt="Linkedin Profile"
            height="22"
            width="22"
          />
        </li>
      </ul>
    </div>
  );
};
