import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import BlogHTMLHead from '../BlogHTMLHead/BlogHTMLHead';

function BlogHeader() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ?? 'light';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const toggledTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(toggledTheme);
    localStorage.setItem('theme', toggledTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--background', '#10111d');
      document.documentElement.style.setProperty(
        '--background-emphasis',
        '#17132c',
      );
      document.documentElement.style.setProperty(
        '--color-text-primary',
        '#d8d8d8',
      );
      document.documentElement.style.setProperty(
        '--color-text-secondary',
        '#f3f3f3',
      );
      document.documentElement.style.setProperty('--border-primary', '#09b4bf');
    } else if (theme === 'light') {
      document.documentElement.style.setProperty(
        '--color-text-primary',
        '#292e31',
      );
      document.documentElement.style.setProperty(
        '--color-text-secondary',
        '#718096',
      );
      document.documentElement.style.setProperty('--border-primary', '#d8d8d8');
      document.documentElement.style.setProperty('--background', '#fff');
      document.documentElement.style.setProperty(
        '--background-emphasis',
        '#fff',
      );
    }
  }, [theme]);

  return (
    <>
      <BlogHTMLHead />
      <header className="text-secondary body-font bg-emphasis shadow-xs">
        <div className="container mx-auto flex flex-wrap px-5 py-3 justify-between lex-row items-center">
          <Link href="/blog">
            <a className="flex title-font font-medium items-center">
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
          {/* <nav className="flex-wrap items-center text-base justify-center hidden md:flex">
            <Link href="/blog/categories/angular">
              <a className="mr-5 hover cursor-pointer">Angular</a>
            </Link>
            <Link href="/blog/categories/node">
              <a className="mr-5 hover cursor-pointer">Node</a>
            </Link>

            <Link href="/blog/categories/html">
              <a className="mr-5 hover cursor-pointer">HTML</a>
            </Link>
            <Link href="/blog/categories/typescript">
              <a className="mr-5 hover cursor-pointer">
                TypeScript
              </a>
            </Link>
          </nav> */}

          <div
            className="dark-mode flex items-center cursor-pointer"
            onClick={() => toggleTheme()}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
                  fill="#fff"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M9.822 2.238a9 9 0 0 0 11.94 11.94C20.768 18.654 16.775 22 12 22 6.477 22 2 17.523 2 12c0-4.775 3.346-8.768 7.822-9.762zm8.342.053L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"
                  fill="#000"
                />
              </svg>
            )}
          </div>
          {/* <div className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 18v2H5v-2h11zm5-7v2H3v-2h18zm-2-7v2H8V4h11z" />
            </svg>
          </div> */}
        </div>
      </header>
    </>
  );
}

export default BlogHeader;
