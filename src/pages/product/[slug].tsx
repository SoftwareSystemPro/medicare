import { GetStaticPaths, GetStaticPropsContext } from "next";
import React from "react";
import ProductSlider from "src/components/product/sliderImage/sliderImages";
import Layout from "src/layout/layout";
import styles from "./style.module.css";
import Content from "src/components/product/Content/Content";
import Description from "src/components/product/Description/Description";
import Similar from "src/components/product/similar/Similar"
import Contact from "src/components/contact/Contact";
const Product = () => {
  return (
    <Layout>
      <div className={styles.section_product}>
        <div className="container">
          <div className={styles.product_box}>
            <div className={styles.product}>
              <div className={styles.product_slider}>
                <ProductSlider />
              </div>
              <div className={styles.product_content}>
                <Content />
              </div>
            </div>
            <Description />
          </div>
          <Similar/>
          <Contact/>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  // Example: Fetch the list of product slugs from an API or database
  const productSlugs = ["salom", "slug2", "slug3"]; // Replace with actual product slugs

  // Map product slugs to paths
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
