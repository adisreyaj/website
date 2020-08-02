import styles from './ProjectItem.module.scss';

export default function ProjectItem({
  description,
  image,
  title,
  subtitle,
  index,
  stack,
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

          <div className={styles['info__tech-stack']}>
            <h3>Tech Stack</h3>
            <div className={styles['info__tech-stack-items']}>
              {stack.map((item) => {
                return (
                  <div className={styles['info__tech-stack-item']}>
                    <img
                      src={`/technologies/${item.logo}.svg`}
                      alt={item.name}
                      height="35"
                    />
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className={styles['project-item__section-divider']}></div>
      <section className={styles['project-item__image-section']}>
        <picture className="js-project-image">
          <source
            srcSet={`/Portfolio/2x/${image}.webp 1000w,/Portfolio/1x/${image}_500x.webp 500w, `}
            type="image/webp"
          />
          <img src={`/Portfolio/2x/${image}.png`} alt={title} />
        </picture>
      </section>
    </div>
  );
}
