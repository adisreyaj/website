import fs from 'fs';
import path from 'path';

import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';

export default function Post({ data, content }) {
  return (
    <div className="post">
      <ReactMarkdown escapeHtml={false} source={content} />
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
      content: `# ${data.title}\n${content}`,
      data: {
        ...data,
        date: formattedDate,
      },
    },
  };
}
