import Link from 'next/link';
import React from 'react';

function BlogHeader() {
  return (
    <header className="text-gray-700 body-font bg-white shadow-custom">
      <div className="container mx-auto flex flex-wrap p-5 justify-between lex-row items-center">
        <Link href="/blog">
          <a className="flex title-font font-medium items-center text-gray-900">
            <img
              className="mb-0"
              src="/sreyaj.svg"
              alt="Adithya Sreyaj"
              height="24"
            />
          </a>
        </Link>
        <nav className="flex-wrap items-center text-base justify-center hidden md:flex">
          <Link href="/blog/categories/angular">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Angular</a>
          </Link>
          <Link href="/blog/categories/node">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Node</a>
          </Link>

          <Link href="/blog/categories/html">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">HTML</a>
          </Link>
          <Link href="/blog/categories/typescript">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              TypeScript
            </a>
          </Link>
        </nav>

        <div className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default BlogHeader;
