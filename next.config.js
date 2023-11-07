const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
  i18n: {
    locales: ['en', 'vi', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
