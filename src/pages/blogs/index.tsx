import { GetStaticPropsContext } from "next";
import React from "react";
import BlogsComponent from "src/components/blogs/BlogsComponent";
import Contact from "src/components/contact/Contact";
import Layout from "src/layout/layout";
import Seo from "src/layout/seo/seo";

const Blogs = () => {
  return (
      <Seo  metaTitle={"Статьи"} metaDescription={"Добро пожаловать на страницу статей компании OOO Medicare ! Здесь вы найдете самые актуальные и информативные статьи о медицинских темах, новейших технологиях и разработках в медицинской сфере."} metaKeywords={"Статьи"}>
            <Layout>
      <div className="container">
        <BlogsComponent />
        <Contact/>
      </div>
    </Layout>
      </Seo>
  );
};

export default Blogs;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../../public/locales/${locale}.json`),
    },
  };
}
