const fs = require('fs');
const matter = require('gray-matter');

(async () => {
  try {
    const postCachePath = `${process.cwd()}/cache/posts.json`;

    const files = await fs.promises.readdir(`${process.cwd()}/content/posts`);
    const posts = files.map((fileName) => {
      const fileContents = fs.readFileSync(
        `${process.cwd()}/content/posts/${fileName}`,
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
        data: {
          ...data,
          date: formattedDate,
          slug: fileName.replace('.md', ''),
        },
        content,
      };
    });
    await fs.writeFileSync(postCachePath, JSON.stringify(posts, null, 2));
    console.info('Cache successfully!');
  } catch (error) {
    console.error(error);
  }
})();
