import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home({ posts }) {
  console.log(posts);
  return posts.map((post) => (
    <Link href={`/blog/${post.slug}`}>
      <div key={post.slug}>{post.title}</div>
    </Link>
  ));
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
