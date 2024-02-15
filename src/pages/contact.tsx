import Layout from 'src/layout/layout'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext } from 'next'

const Contact = () => {
    const t = useTranslations('Contact')
  return (
    <Layout>
        <h1>{t('0')}</h1>
    </Layout>
  )
}

export default Contact

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
      props: {
        messages: require(`../../public/locales/${locale}.json`)
      }
    };
  }