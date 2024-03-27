import React from "react";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "src/services/blogs.query";
import { BlogsBoxType } from "src/interface/BlogsBox.type";
import { useRouter } from "next/router";
const BlogsComponent = () => {
  const t = useTranslations();
  const {locale} = useRouter();
  const router = useRouter();
  const {data  , loading ,error} = useQuery(GET_BLOGS)
  
  return (
    <div className={styles.blogs}>
      <h2>{t("Payment.12")}</h2>
      <div className={styles.blogs_boxs}>
        {data?.blogss?.map((elem:BlogsBoxType, index:number) => (
          <div key={index} className={styles.blogs_card}>
            <Image src={elem?.image.url} width={683} height={307} alt="Blog Image" />
            <div>
            <h3>{locale == 'ru' ? elem?.titleRu : locale == 'en' ? elem?.titleEn :locale == 'uz' ? elem?.titleUz :elem?.titleRu}</h3>
            <p>{locale == 'ru' ? elem?.descriptionRu.text?.slice(0  ,300) : locale == 'en' ? elem?.descriptionEn.text?.slice(0  ,300) :  locale == 'uz' ? elem?.descriptionUz.text?.slice(0  ,300) : elem?.descriptionRu.text?.slice(0  ,300) }</p>
            <div className={styles.date}>
                <span className={styles.date_text}>{elem?.date}</span>
                <span className={styles.data_button} onClick={()=>router.push(`/blog/${elem?.slug}`)}>{t('Payment.13')} <PlayArrowIcon sx={{color:'rgba(226, 49, 54, 1)' , cursor:'pointer'}}/></span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsComponent;
