import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';

import BlogHeader from '../../components/BlogHeader/Header';
import BlogFooter from '../../components/BlogFooter/Footer';
import PostItemsCarousel from '../../components/PostItemsCarousel/PostItemsCarousel';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarouse';

export default function Home({ posts }) {
  return (
    <div className="bg-body">
      <BlogHeader />
      <main className="content container mx-auto">
        <section className="mb-12 flex flex-col items-center px-4">
          <h3 className="mb-1">Technologies to Explore 🔥</h3>
          <p className="text-secondary mb-8 text-center">
            Find blogs about these awesome technologies that build the web we
            see today
          </p>
          <CategoryCarousel />
        </section>
        <section className="mt-12">
          <h3 className="mb-1 mx-auto text-center">Latest Posts 🚀</h3>
          <p className="text-secondary mb-8 text-center px-4">
            Here are few of the latest posts on the blog. I hope they help you
            in some way!
          </p>
          <PostItemsCarousel posts={posts} />
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}

export async function getStaticProps() {
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
  return {
    props: {
      posts,
    },
  };
}
