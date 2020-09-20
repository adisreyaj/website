import Link from 'next/link';
import React from 'react';
import PostitemCard from '../PostItemCard/PostItemCard';

function PostItemsCarousel({ posts }) {
  return (
    <section className="mt-8 mx-auto px-4 container posts-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map(({ data }) => (
        <Link href={`/blog/${data.slug}`}>
          <article
            key={data.slug}
            className="post-item p-2 flex justify-center"
          >
            <PostitemCard {...data} />
          </article>
        </Link>
      ))}
    </section>
  );
}

export default PostItemsCarousel;
