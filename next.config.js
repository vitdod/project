const { i18n } = require('./next-i18next.config')
const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: 
  {
    locales: [...i18n.locales],
    defaultLocale: "ru-RU",
    localeDetection: false
  },  
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.wem1386640.ukrdomen.com',
      },
    ],
  },
}

module.exports = nextConfig

const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract(nextConfig);