import { GetServerSideProps } from "next";
import { fetchBlogsData } from "./api/blogs"; // Blog ma'lumotlarini olish uchun o'zgartirish
import { BlogsType } from "src/interface/Blogs.type";
import { format } from "date-fns";
import { fetchCategoryData } from "./api/category";
import { CategoryType } from "src/interface/category.type";
import { fetchProductData } from "./api/product";
import { CardProductType } from "src/interface/card.type";

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader('Content-Type', 'text/xml');
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();
  return { props: {} };
};

async function generateSitemap(): Promise<string> {
    const blogs = await fetchBlogsData(); // Blog ma'lumotlarini olish
    const category = await fetchCategoryData();
    const products = await fetchProductData();
    const formattedXml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://medicaregroup.uz/</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
      <url>
        <loc>https://medicaregroup.uz/contact</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
        <url>
        <loc>https://medicaregroup.uz/about</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
        <url>
        <loc>https://medicaregroup.uz/payment</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
        <url>
        <loc>https://medicaregroup.uz/blogs</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
        ${blogs.map((blog:BlogsType) => `
        <url>
          <loc>https://medicaregroup.uz/blog/${blog.slug}</loc>
          <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
        </url>
      `).join('')}
      ${products.map((product:CardProductType) => `
      <url>
        <loc>https://medicaregroup.uz/product/${product.slug}</loc>
        <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
      </url>
    `).join('')}
        ${category.map((category:CategoryType) => `
          <url>
            <loc>https://medicaregroup.uz/catalog/${category.categorySlug}</loc>
            <lastmod>${format(new Date() , 'yyyy-MM-dd')}</lastmod>
          </url>
        `).join('')}
      </urlset>`;
    return formattedXml;
  }
  
