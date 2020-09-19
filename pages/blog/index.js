import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import BlogHeader from './Header';
import BlogFooter from './Footer';
import PostitemCard from './Post-item-card/Post-item-card';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <BlogHeader />
      <section className="mt-8 mx-auto px-4 container posts-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`}>
            <article
              key={post.slug}
              className="post-item p-2 flex justify-center"
            >
              <PostitemCard {...post} />
            </article>
          </Link>
        ))}
      </section>
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
      ...data,
      date: formattedDate,
      slug: fileName.replace('.md', ''),
    };
  });
  return {
    props: {
      posts,
    },
  };
}
