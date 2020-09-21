const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withPWA = require('next-pwa');
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
});
