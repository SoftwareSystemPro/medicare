import React from "react";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CardBlogsData } from "src/services/fakedata";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const BlogsComponent = () => {
  const t = useTranslations();
  return (
    <div className={styles.blogs}>
      <h2>{t("Payment.12")}</h2>
      <div className={styles.blogs_boxs}>
        {CardBlogsData.map((elem, index) => (
          <div key={index} className={styles.blogs_card}>
            <Image src={elem.image} width={383} height={247} alt="Blog Image" />
            <div>
            <h3>{elem.title}</h3>
            <p>{elem.description.slice(0  ,300)}</p>
            <div className={styles.date}>
                <span className={styles.date_text}>{elem.date}</span>
                <span className={styles.data_button}>{t('Payment.13')} <PlayArrowIcon sx={{color:'rgba(226, 49, 54, 1)'}}/></span>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsComponent;
