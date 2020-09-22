import React from 'react';
import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';
import PostItemsCarousel from '../../../components/PostItemsCarousel/PostItemsCarousel';
import { ENDPOINTS } from '../../../config/api.config';

function Search({ posts }) {
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

export default Search;

export async function getServerSideProps({ query: { query = null } }) {
  let posts = [];
  if (query)
    posts = await fetch(`${ENDPOINTS.search}?q=${query}`).then((res) =>
      res.json(),
    );
  return {
    props: {
      posts,
      query,
    },
  };
}
