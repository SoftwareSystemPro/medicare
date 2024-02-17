import { Box } from '@mui/material'
import Layout from '../layout/layout'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import HomeHero from 'src/components/home/home-hero/homeHero'
import OurPartner from 'src/components/home/our-partner'
import AboutVideo from 'src/components/home/about-video/aboutVideo'
import OurAdvantages from 'src/components/home/our-advantag/ourAdvantages'
import CardCommon from 'src/components/common/card/cardCommon'
import HomeXit from 'src/components/home/home-xit/homeXit'
import Ask from 'src/components/home/ask/Ask'
import FaqComponent from 'src/components/home/faq/Faq'

const Home = () => {
  return (
      <Layout>
        <HomeHero/>
        <OurPartner/>
        <AboutVideo/>
        <OurAdvantages/>
        <HomeXit/>
        <Ask/>
        <FaqComponent/>
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