import React from 'react'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import IconImage1 from "../../../../public/about/about_icon1.svg"
import IconImage2 from "../../../../public/about/about_icon2.svg"
import IconImage3 from "../../../../public/about/about_icon3.svg"
import IconImage4 from "../../../../public/about/about_icon4.svg"
import IconImage5 from "../../../../public/about/about_icon5.svg"
import Sertficate from "../../../../public/about/sertificates.png"
import SertficateMobile from "../../../../public/about/sertificates-media.png"
const AboutContentBottom = () => {
  const t = useTranslations();
  return (
    <>
        <div className={styles.about_content_bottom}>
        <div className={styles.about_content_bottom_cards}>
          <div className={styles.about_content_bottom_card_active}>
              <h3>{t('About.3')}</h3>
          </div>
          <div className={styles.about_content_bottom_card}>
              <Image src={IconImage1} alt='About Icon'/>
              <div className={styles.about_content_bottom_card_left}>
              <h3>{t('About.4')}</h3>
              <p>{t("About.5")}</p>
              </div>
          </div>
          <div className={styles.about_content_bottom_card}>
              <Image src={IconImage2} alt='About Icon'/>
              <div className={styles.about_content_bottom_card_left}>
              <h3>{t('About.6')}</h3>
              <p>{t("About.7")}</p>
              </div>
          </div>
          <div className={styles.about_content_bottom_card}>
              <Image src={IconImage3} alt='About Icon'/>
              <div className={styles.about_content_bottom_card_left}>
              <h3>{t('About.8')}</h3>
              <p>{t("About.9")}</p>
              </div>
          </div>
          <div className={styles.about_content_bottom_card}>
              <Image src={IconImage4} alt='About Icon'/>
              <div className={styles.about_content_bottom_card_left}>
              <h3>{t('About.10')}</h3>
              <p>{t("About.11")}</p>
              </div>
          </div>
          <div className={styles.about_content_bottom_card}>
              <Image src={IconImage5} alt='About Icon'/>
              <div className={styles.about_content_bottom_card_left}>
              <h3>{t('About.12')}</h3>
              <p>{t("About.13")}</p>
              </div>
          </div>
        </div>
        
    </div>
    <div className={styles.sertficate}>
      <h2>{t("About.14")}</h2>
      <div className={styles.desktop_sertficate}>
      <Image src={Sertficate} alt='Sertficate image'/>
      </div>
      <div className={styles.mobile_sertficate}>
      <Image src={SertficateMobile} alt='Sertficate image'/>
      </div>
    </div>
    </>
  )
}

export default AboutContentBottom