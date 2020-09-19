import fs from 'fs';
import path from 'path';

import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import BlogHeader from './Header';
import styles from './blog.module.scss';
import BlogFooter from './Footer';

export default function Post({ data, content }) {
  return (
    <div>
      <div className="mb-10">
        <BlogHeader />
      </div>
      <div className="post px-6 md:px-8">
        <section className="post__header">
          <img
            src={`/feature-images/${data.image}`}
            alt={data.title}
            className="feature-image rounded-md"
          />
          <h1 className="leading-snug md:text-4xl text-2xl mt-5 mb-8">
            {data.title}
          </h1>
        </section>
        <section
          className={[
            styles.meta,
            'flex',
            'items-center',
            'mb-12',
            'py-4',
            'border-t',
            'border-r-0',
            'border-l-0',
            'border-b',
            'border-solid',
            'border-gray-300',
          ].join(' ')}
        >
          <div className="flex flex-row">
            <img
              className={[styles['meta__avatar'], 'mr-3'].join(' ')}
              src="/authors/adithya.jpg"
              alt={data.author}
            />
            <div>
              <p className="font-bold">{data.author}</p>
              <p className="text-sm text-gray-800">
                Published on <span className="font-medium">{data.date}</span>
              </p>
            </div>
          </div>
        </section>
        <section className="markdown-body">
          <ReactMarkdown escapeHtml={false} source={content} />
        </section>
      </div>
      <div>
        <BlogFooter />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(
    path.join(process.cwd(), 'content/posts', `${slug}.md`),
  );
  const { data, content } = matter(fileContents.toString());
  // Convert post date to format: Month day, Year
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = data.date.toLocaleDateString('en-US', options);
  return {
    props: {
      content,
      data: {
        ...data,
        date: formattedDate,
      },
    },
  };
}
