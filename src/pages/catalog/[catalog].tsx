import { GetStaticPropsContext, GetStaticPaths } from 'next';
import React from 'react';
import CatalogComponent from 'src/components/catalog';
import Contact from 'src/components/contact/Contact';
import Layout from 'src/layout/layout';

const Catalog = () => {
  return (
    <Layout>
      <CatalogComponent />
      <Contact />
    </Layout>
  );
};

export default Catalog;

export const getStaticPaths: GetStaticPaths = async () => {

  const catalogs = ['catalog1', 'catalog2']; 

  const paths = catalogs.map((catalog) => ({
    params: { catalog },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = require(`../../../public/locales/${locale}.json`);
  return {
    props: {
      messages,
    },
  };
}
