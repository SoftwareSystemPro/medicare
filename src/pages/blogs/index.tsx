import { GetStaticPropsContext } from "next";
import React from "react";
import BlogsComponent from "src/components/blogs/BlogsComponent";
import Contact from "src/components/contact/Contact";
import Layout from "src/layout/layout";

const Blogs = () => {
  return (
    <Layout>
      <div className="container">
        <BlogsComponent />
        <Contact/>
      </div>
    </Layout>
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
