/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n : {
    locales:['ru' , 'uz' , 'en'],
    defaultLocale:'ru'
  } 
}

module.exports = nextConfig
