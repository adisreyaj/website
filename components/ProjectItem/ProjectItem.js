import styles from './ProjectItem.module.scss';

export default function ProjectItem({
  description,
  image,
  title,
  subtitle,
  index,
}) {
  return (
    <div
      className={styles['project-item']}
      data-position={index % 2 === 0 ? 'right' : 'left'}
    >
      <section className={styles['project-item__info-section']}>
        <div>
          <div className={styles['info__heading']}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            porro culpa sit eum suscipit possimus enim dolores provident unde
            et. Tempore dolores quibusdam reiciendis esse corrupti quam quidem
            in repudiandae?
          </p>
        </div>
      </section>
      <section className={styles['project-item__image-section']}>
        <img src={image} alt="Best Of JS" />
      </section>
    </div>
  );
}
