const posts = require('../../../cache/posts.json');

export default (req, res) => {
  const {
    query: { category },
  } = req;
  if (category) {
    res.statusCode = 200;
    const matches = posts.filter(
      (item) => item.data.category.toLowerCase() === category.toLowerCase(),
    );
    return res.json(matches);
  } else {
    res.statusCode = 404;
    return res.json({});
  }
  res.json();
};
