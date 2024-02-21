import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";
import ProductSlider from "src/components/product/sliderImage/sliderImages";
import Layout from "src/layout/layout";
import styles from "./style.module.css";
import Content from "src/components/product/Content/Content";
import Description from "src/components/product/Description/Description";
import Similar from "src/components/product/similar/Similar"
import Contact from "src/components/contact/Contact";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTMORE } from "src/services/productMore.query";
import { useRouter } from "next/router";
const Product = () => {
  const {query} = useRouter();
  const {loading , error , data} = useQuery(GET_PRODUCTMORE , {
    variables : {slug : query.slug}
  })
  return (
    <Layout>
      <div className={styles.section_product}>
        <div className="container">
          <div className={styles.product_box}>
            <div className={styles.product}>
              <div className={styles.product_slider}>
                <ProductSlider dataProduct={data?.product} />
              </div>
              <div className={styles.product_content}>
                <Content dataProduct={data?.product} />
              </div>
            </div>
            <Description dataProduct={data?.product} />
          </div>
          <Similar dataProduct={data?.product}/>
          <Contact/>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = ["salom", "slug2", "slug3"]; 

  const paths = productSlugs.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
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
