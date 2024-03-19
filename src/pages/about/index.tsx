import React from "react";
import Layout from "./../../layout/layout";
import { GetStaticPropsContext } from "next";
import AboutContentTop from "../../components/about/aboutContentTop/aboutContentTop";
import AboutContentBottom from "../../components/about/aboutContentBottom/aboutContentBottom";
import Contact from "src/components/contact/Contact";
import Seo from "src/layout/seo/seo";
const About = () => {
  return (
      <Seo metaTitle={"OOO Medicare  Ваш надёжный партнер в здравоохранении"} metaDescription={"Мы в OOO Medicare  гордимся тем, что предоставляем высококачественные медицинские изделия, которые являются надежным стандартом в индустрии здравоохранения. С нашим богатым опытом и уникальным подходом к качеству, мы стремимся обеспечить наших клиентов всем необходимым для эффективной и безопасной медицинской практики."} metaKeywords={"medicare о нас"} >
            <Layout>
      <div className="container">
          <AboutContentTop/>
          <AboutContentBottom/>
          <Contact/>
      </div>
    </Layout>
      </Seo>
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