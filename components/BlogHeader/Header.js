import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

function BlogHeader() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta
          name="description"
          content="A collection of articels that help you through for developer journey"
        />
        <meta name="keywords" content="Angular, Node, TypeScript, JavaScript" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#2196f3"></meta>
      </Head>
      <header className="text-gray-700 body-font bg-white shadow-xs">
        <div className="container mx-auto flex flex-wrap px-5 py-3 justify-between lex-row items-center">
          <Link href="/blog">
            <a className="flex title-font font-medium items-center text-gray-900">
              <img
                className="mb-0 hidden sm:block"
                src="/dcode.svg"
                alt="Adithya Sreyaj"
                height="40"
              />
              <img
                className="mb-0 sm:hidden"
                src="/dcode-logo.svg"
                alt="Adithya Sreyaj"
                height="40"
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
    </>
  );
}

export default BlogHeader;
