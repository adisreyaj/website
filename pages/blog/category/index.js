import React from 'react';
import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';

function CategoryLandingPage() {
  return (
    <>
      <div>
        <div className="mb-10">
          <BlogHeader />
        </div>
      </div>
      <div>
        <BlogFooter />
      </div>
    </>
  );
}

export default CategoryLandingPage;
