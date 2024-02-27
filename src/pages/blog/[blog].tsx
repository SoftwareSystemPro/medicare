import { useQuery } from '@apollo/client';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import BlogComponent from 'src/components/blog/blog';
import Contact from 'src/components/contact/Contact';
import Layout from 'src/layout/layout';
import Seo from 'src/layout/seo/seo';
import { GET_BLOG } from 'src/services/blog.query';

const Blog = () => {
  const {query} = useRouter();
  const {loading ,error,data}= useQuery(GET_BLOG,{
    variables:{slug : query.blog}
  })
  
  return (
    <Seo metaTitle={data?.blogs?.titleRu} metaDescription={data?.blogs?.descriptionRu?.text.slice(0 , 150)} metaKeywords={data?.blogs?.keywords}>

<Layout>
      <div className='container'>
        <BlogComponent dataBlog={data?.blogs}/>
        <Contact/>
      </div>
    </Layout>
    </Seo>

  );
};

export default Blog;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = ['salom', 'blog2']; // Assuming "salom" and "blog2" are the blog IDs
  
  const paths = blogs.map((blog) => ({
    params: { blog }, 
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
