import { deflate } from 'zlib';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://ryan-jasinski.com',
  generateRobotsTxt: true,
  exclude: [
    '/admin',
    '/admin/*',
    '/dashboard',
    '/dashboard/*',
    '/login',
    '/signup',
    '/profile',
    '/profile/*',
    '/api/*',
    '/user/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/dashboard/',
          '/login',
          '/signup',
          '/profile/',
          '/api/',
          '/user/',
        ],
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;
