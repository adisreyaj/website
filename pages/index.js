import Head from 'next/head';
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from 'framer-motion';

import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Header';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ProjectItem from '../components/ProjectItem/ProjectItem';
import IntersectionContainer from '../components/IntersectionContainer';
import { ENDPOINTS } from '../config/endpoints';

export default function Home({ projects }) {
  const { scrollYProgress } = useViewportScroll();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: [0.17, 0.67, 0.73, 1.03] },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.17, 0.67, 0.73, 1.03] },
    },
  };
  return (
    <AnimatePresence>
      <div className={styles.container}>
        <Head>
          <title>Adithya Sreyaj - Full Stack Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#083d77" />
        </Head>
        <Header />
        <main className={styles.main}>
          <motion.section
            className={[styles.hero, 'js-hero'].join(' ')}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item}>Hi I'm,</motion.p>
            <motion.h1 variants={item}>Adithya Sreyaj</motion.h1>
            <motion.div className={styles['hero__meta']} variants={item}>
              <p>
                I love to code beautiful applications for the world. When I am
                not coding, I'll be thinking of Ideas and reading articles or
                blogs about coding.
              </p>
              <br />
              <br />
              <p>
                I work as a UI Engineer at &nbsp;
                <span className="emphasis">Hypersonix</span>
              </p>
            </motion.div>
            <motion.div variants={item}>
              <SocialIconsHero />
            </motion.div>
          </motion.section>
          <section className={styles.about}></section>
          <section className={styles.skills}></section>
          <section className={styles.projects}>
            <SectionHeading
              title="Stuffs I've done"
              subtitle="Here are some of the projects that I've done during my free time. You can find mock UIs, Full-stack Web Applications, Mobile Applications and more"
            />
            <div>
              {projects.map((item, i) => (
                <IntersectionContainer key={i}>
                  <ProjectItem
                    className="js-project-item"
                    {...item}
                    index={i}
                  />
                </IntersectionContainer>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </AnimatePresence>
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

export async function getStaticProps() {
  const projects = await fetch(ENDPOINTS.portfolio).then((res) => res.json());
  return {
    props: {
      projects,
    },
  };
}
