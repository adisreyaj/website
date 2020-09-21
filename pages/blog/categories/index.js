import React from 'react';
import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';
import { CATEGORIES } from '../../../config/categories.config';
import { capitalizeText } from '../../../util/util';

function CategoryLandingPage() {
  return (
    <>
      <div>
        <section>
          <BlogHeader />
        </section>
        <section className="content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 box-layout px-4">
          {CATEGORIES.map((category) => {
            return (
              <article className="flex flex-col">
                <div
                  className="bg-white p-4 rounded-md shadow-xs cursor-pointer bg-no-repeat transform transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundPosition: 'center',
                    backgroundImage: `url('/technologies/${category}-bg.svg')`,
                  }}
                >
                  <div style={{ width: 40, height: 40 }} className="mb-5">
                    <img src={`/technologies/${category}.svg`} alt={category} />
                  </div>
                  <p className="font-medium text-lg">
                    {capitalizeText(category)}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
        <section>
          <BlogFooter />
        </section>
      </div>
    </>
  );
}

export default CategoryLandingPage;
