import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';

import BlogFooter from '../../../components/BlogFooter/Footer';
import BlogHeader from '../../../components/BlogHeader/Header';
import PostItemsCarousel from '../../../components/PostItemsCarousel/PostItemsCarousel';
import { CATEGORIES } from '../../../config/categories.config';

function Category({ posts, category }) {
  return (
    <>
      <div>
        <div>
          <BlogHeader />
        </div>
        <section className="content">
          <h2></h2>
          {!!posts && posts.length > 0 && <PostItemsCarousel posts={posts} />}
        </section>
      </div>
      <div>
        <BlogFooter />
      </div>
    </>
  );
}

export default Category;

export async function getStaticPaths() {
  const categories = CATEGORIES;
  const paths = categories.map((category) => ({
    params: {
      category,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category } }) {
  const files = await fs.promises.readdir(`${process.cwd()}/content/posts`);
  const posts = files.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${process.cwd()}/content/posts/${fileName}`,
    );
    const { data } = matter(fileContents.toString());
    // Convert post date to format: Month day, Year
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = data.date.toLocaleDateString('en-US', options);
    return {
      data: { ...data, date: formattedDate, slug: fileName.replace('.md', '') },
    };
  });

  if (category) {
    return {
      props: {
        posts: posts.filter((post) => post.data.category === category),
      },
    };
  }
  return {
    props: {
      posts,
      category,
    },
  };
}
