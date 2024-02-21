import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useQuery } from "@apollo/client";
import { GET_BLOG } from "src/services/blog.query";
import { useRouter } from "next/router";
import { BlogProps } from "./blog.props";
const BlogComponent = ({dataBlog} : BlogProps) => {
  const {query , locale} = useRouter();
  
  const t = useTranslations();

  return (
    <div className={styles.blog}>
      <h2>
        {locale == 'ru' ? dataBlog?.titleRu : locale == 'en' ? dataBlog?.titleEn :locale == 'uz' ? dataBlog?.titleUz :dataBlog?.titleRu}
      </h2>
      <div className={styles.blog_box}>
        <Image
          src={
            dataBlog?.image?.url
          }
          width={300}
          height={300}
          alt="Image Blog"
        />
      <div  className={styles.description} dangerouslySetInnerHTML={{__html: locale == "ru" ? dataBlog?.descriptionRu?.html : locale == "en" ? dataBlog?.descriptionEn?.html : locale == "uz" ? dataBlog?.descriptionUz?.html :dataBlog?.descriptionRu?.html}}>
              </div>
      </div>
      <div className={styles.network}>
        <span>{t("Blog.0")}</span>
        <FacebookIcon sx={{ color: "white", marginLeft: "10px" }} />
        <InstagramIcon sx={{ color: "white", marginLeft: "10px" }} />
        <TelegramIcon sx={{ color: "white", marginLeft: "10px" }} />
      </div>
      <div className={styles.similar}>
        <h2>{t("Blog.1")}</h2>
        <div className={styles.cards}>
          {/* {DataCard.slice(0, 4).map((elem, index) => (
            <CardCommon key={index} cardData={elem} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
