import React from 'react'
import styles from './style.module.css'
import { useTranslations } from 'next-intl'
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
            <iframe width="100%"  src="https://www.youtube.com/embed/0rflpA9RcUA?si=KY5dcQmZk88YkKaD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
        </div>
    </div>
  )
}

export default AboutVideo