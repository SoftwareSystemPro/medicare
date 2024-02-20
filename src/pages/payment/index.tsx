import { GetStaticPropsContext } from 'next'
import React from 'react'
import Ask from 'src/components/home/ask/Ask'
import PaymentDelivery from 'src/components/payment/payment-delivery/PaymentDelivery'
import PaymentTop from 'src/components/payment/payment-top/PaymentTop'
import Layout from 'src/layout/layout'

const Payment = () => {
  return (
    <Layout>
        <div className='container'>
            <PaymentTop/>
            <PaymentDelivery/>
            <Ask/>
        </div>
    </Layout>
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