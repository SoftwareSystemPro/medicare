/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains: ['media.graphassets.com' , 'www.medischevakhandel.nl']
  },
  i18n : {
    locales:['ru' , 'uz' , 'en'],
    defaultLocale:'ru'
  } 
}

module.exports = nextConfig
