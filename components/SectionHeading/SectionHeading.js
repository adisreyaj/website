import styles from './SectionHeading.module.scss';

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className={styles['section-heading']}>
      <div className={styles['section-heading_info']}>
        <h2 className={styles['section-heading__title']}>{title}</h2>
        <p className={styles['section-heading__subtitle']}>{subtitle}</p>
      </div>
    </div>
  );
}
