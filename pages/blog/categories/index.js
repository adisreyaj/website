import React from 'react';
import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';
import CategoryCarousel from '../../../components/CategoryCarousel/CategoryCarouse';
import { CATEGORIES } from '../../../config/categories.config';
import { capitalizeText } from '../../../util/util';

function CategoryLandingPage() {
  return (
    <>
      <div>
        <section>
          <BlogHeader />
        </section>
        <section className="content">
          <CategoryCarousel />
        </section>
        <section>
          <BlogFooter />
        </section>
      </div>
    </>
  );
}

export default CategoryLandingPage;
