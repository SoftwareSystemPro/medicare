import { GetStaticPropsContext } from 'next'
import React from 'react'
import Ask from 'src/components/home/ask/Ask'
import PaymentDelivery from 'src/components/payment/payment-delivery/PaymentDelivery'
import PaymentTop from 'src/components/payment/payment-top/PaymentTop'
import Layout from 'src/layout/layout'
import Seo from 'src/layout/seo/seo'

const Payment = () => {
  return (
    <Seo metaTitle={'Оплата и доставка'} metaDescription={'Перечислением на расчетный счет, Онлайн-оплата через платежные системы, Наличными'} metaKeywords={'Оплата и доставка'}>
          <Layout>
        <div className='container'>
            <PaymentTop/>
            <PaymentDelivery/>
            <Ask/>
        </div>
    </Layout>
    </Seo>
  )
}

export default Payment

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
      props: {
        messages: require(`../../../public/locales/${locale}.json`)
      }
    };
  }