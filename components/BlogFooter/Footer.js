import React from 'react';

function BlogFooter() {
  return (
    <footer className="text-gray-700 body-font border-t border-solid border-r-0 border-l-0 border-b-0 border-gray-300">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            className="hidden sm:block"
            src="/dcode-logo.svg"
            alt="DCode Blog"
            height="50"
          />
          <img
            className="sm:hidden"
            src="/dcode.svg"
            alt="DCode Blog"
            height="50"
          />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 Code @ Sreyaj —
          <a
            href="https://twitter.com/adisreyaj"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Adithya Sreyaj
          </a>
        </p>
      </div>
      <script src="/js/prism.js"></script>
    </footer>
  );
}

export default BlogFooter;
