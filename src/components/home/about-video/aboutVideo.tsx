import React from 'react'
import styles from './style.module.css'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ImageBox from "../../../../public/home/medicare.png"
const AboutVideo = () => {
    const t = useTranslations('Home')
  return (
    <div className='container'>
        <div className={styles.about_video}>
            <div className={styles.about_content}>
                <h3>{t('AboutVideo.0')}</h3>
                <p>{t('AboutVideo.1')}</p>
            </div>
            <div className={styles.about_video_content}>
            <Image   src={ImageBox}  alt="image bxlog" />
            </div>
        </div>
    </div>
  )
}

export default AboutVideo