import { useQuery } from '@apollo/client';
import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import CatalogComponent from 'src/components/catalog';
import Contact from 'src/components/contact/Contact';
import { CardProductType } from 'src/interface/card.type';
import Layout from 'src/layout/layout';
import Seo from 'src/layout/seo/seo';
import { GET_CATEGORIES_SLUG } from 'src/services/category.query';

const Catalog = () => {
  const {query} = useRouter();
  const {loading , error , data} = useQuery(GET_CATEGORIES_SLUG,{
    variables:{categorySlug:query.catalog}
  })
  return (
    <Seo metaTitle={data?.category?.categoryRu} metaDescription={''} metaKeywords={data?.category?.categoryRu}>
    <Layout>
      <CatalogComponent />
      <Contact />
    </Layout>
    </Seo>

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
    fallback: true,
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
