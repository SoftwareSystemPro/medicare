import React from "react";
import Layout from "./../../layout/layout";
import { GetStaticPropsContext } from "next";
import AboutContentTop from "../../components/about/aboutContentTop/aboutContentTop";
import AboutContentBottom from "../../components/about/aboutContentBottom/aboutContentBottom";
import Contact from "src/components/contact/Contact";
const About = () => {
  return (
    <Layout>
      <div className="container">
          <AboutContentTop/>
          <AboutContentBottom/>
          <Contact/>
      </div>
    </Layout>
  )
}

export default About

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../../public/locales/${locale}.json`)
    }
  };
}