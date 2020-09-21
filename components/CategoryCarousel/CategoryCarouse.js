import React from 'react';
import { CATEGORIES } from '../../config/categories.config';
import { capitalizeText } from '../../util/util';

function CategoryCarousel() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 w-full">
      {CATEGORIES.map((category) => {
        return (
          <article className="flex flex-col">
            <div
              className="bg-emphasis p-4 rounded-md shadow-xs cursor-pointer bg-no-repeat transform transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                backgroundPosition: 'center',
                backgroundImage: `url('/technologies/${category}-bg.svg')`,
              }}
            >
              <div style={{ width: 40, height: 40 }} className="mb-5">
                <img src={`/technologies/${category}.svg`} alt={category} />
              </div>
              <p className="font-medium text-lg">{capitalizeText(category)}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default CategoryCarousel;
