import { GetStaticPropsContext } from 'next'
import React from 'react'
import OrderComponent from 'src/components/order/OrderComponent'
import Layout from 'src/layout/layout'

const Order = () => {
  return (
    <Layout>
        <OrderComponent/>
    </Layout>
  )
}

export default Order


export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
      props: {
        messages: require(`../../../public/locales/${locale}.json`)
      }
    };
  }