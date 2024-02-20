import React from 'react'
import styles from "./style.module.css";
import Image from 'next/image'
import AboutBanner from "./../../../../public/about/banner.svg"
import AboutContentImage from "./../../../../public/about/about_content_img.png"
import AboutContentBottomImage from "./../../../../public/about/about_content_bottom.png"
import AboutContentIconImage from "./../../../../public/about/about_content_icon.svg"
import { useTranslations } from 'next-intl';
const AboutContentTop = () => {
  const t = useTranslations();
  return (
    <div className={styles.about_top}>
      <Image src={AboutBanner} alt='About Banner'/>
      <div className={styles.about_top_content}>
          <div className={styles.about_top_content_img}>
            <Image src={AboutContentImage} alt='About iMAGE'/>
          </div>
          <div className={styles.about_top_content_left}>
              <h2>Medicare LLC</h2>
              <h3>{t('About.0')}</h3>
              <p>{t('About.1')}</p>
          </div>
      </div>
      <div className={styles.about_bottom_content}>
          <div className={styles.about_bottom_content_left}>
          <Image src={AboutContentIconImage} alt='About iMAGE'/>
              <p>{t('About.2')}</p>
          </div>
          <div className={styles.about_bottom_content_img}>
            <Image src={AboutContentBottomImage} alt='About iMAGE'/>
          </div>
      </div>
    </div>
  )
}

export default AboutContentTop