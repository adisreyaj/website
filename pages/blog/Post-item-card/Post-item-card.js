import React from 'react';
import styles from './Post-item-card.module.scss';
function PostitemCard({ image, title, author, date }) {
  return (
    <div
      className={[
        'bg-white',
        'shadow-xs',
        'cursor-pointer',
        'rounded-md',
        'transform',
        'transition-transform',
        'duration-300',
        'hover:shadow-md    ',
        'hover:-translate-y-1',
        styles['post-card'],
      ].join(' ')}
    >
      <header>
        <img
          className="rounded-tl-md rounded-tr-md"
          src={`/feature-images/${image}`}
          alt={title}
        />
      </header>
      <section className="p-3">
        <p className="font-medium leading-tight">{title}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-row items-center justify-start">
            <img
              className={[
                'rounded-full',
                'object-fill',
                styles['author-image'],
              ].join(' ')}
              src="/authors/adithya.jpg"
              alt={author}
            />
            <div className="ml-2">
              <p className="text-gray-800 font-medium  text-sm">{author}</p>
              <p className="text-gray-600 text-xs">{date}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostitemCard;
