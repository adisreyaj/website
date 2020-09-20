const posts = require('../../cache/posts.json');
import Fuse from 'fuse.js';
const fuse = new Fuse(posts, {
  keys: [
    'data.title',
    'data.description',
    'data.author',
    'data.category',
    'data.tags',
  ],
  minMatchCharLength: 3,
  threshold: 0.5,
});

export default (req, res) => {
  const {
    query: { q },
  } = req;
  if (q) {
    res.statusCode = 200;
    res.json(fuse.search(q).map(({ item }) => item));
  } else {
    res.statusCode = 404;
    res.json({});
  }
};
