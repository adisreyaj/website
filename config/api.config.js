import { processEnv } from 'next/dist/lib/load-env-config';

export const ENDPOINTS = {
  portfolio:
    'https://raw.githubusercontent.com/adisreyaj/website/master/public/data/portfolio.json',
  search: `${process.env.BASE_URL}/api/search`,
  category: `${process.env.BASE_URL}/api/category`,
};
