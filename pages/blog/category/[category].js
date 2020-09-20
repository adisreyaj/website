import { NextSeo } from 'next-seo';
import React from 'react';
import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';
import PostItemsCarousel from '../../../components/PostItemsCarousel/PostItemsCarousel';
import { ENDPOINTS } from '../../../config/endpoints';

function Category({ posts }) {
  console.log(posts);
  return (
    <>
      <div>
        <div className="mb-10">
          <BlogHeader />
        </div>
        {!!posts && posts.length > 0 && <PostItemsCarousel posts={posts} />}
      </div>
      <div>
        <BlogFooter />
      </div>
    </>
  );
}

export default Category;

export async function getServerSideProps({ params: { category = null } }) {
  let posts = [];
  if (category)
    posts = await fetch(`${ENDPOINTS.category}/${category}`).then((res) =>
      res.json(),
    );
  return {
    props: {
      posts,
      category,
    },
  };
}
