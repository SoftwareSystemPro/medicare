import Layout from '../layout/layout'
import { GetStaticPropsContext } from 'next'
import HomeHero from 'src/components/home/home-hero/homeHero'
import OurPartner from 'src/components/home/our-partner'
import AboutVideo from 'src/components/home/about-video/aboutVideo'
import OurAdvantages from 'src/components/home/our-advantag/ourAdvantages'
import HomeXit from 'src/components/home/home-xit/homeXit'
import Ask from 'src/components/home/ask/Ask'
import FaqComponent from 'src/components/home/faq/Faq'
import BlogHome from 'src/components/home/blog/blogHome'
import Contact from 'src/components/contact/Contact'

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
        <BlogHome/>
        <Contact/>
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