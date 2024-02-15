import { Box } from '@mui/material'
import Layout from '../layout/layout'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import HomeHero from 'src/components/home/home-hero/homeHero'

const Home = () => {
  return (
      <Layout>
        <HomeHero/>
      </Layout>
  )
}

export default Home

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../public/locales/${locale}.json`)
    }
  };
}