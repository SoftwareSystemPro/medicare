import { useTranslations } from 'next-intl';
import React from 'react'
import HeroBackground from "../../../../public/home/hero-background.svg"
import HeroBackgroundMobile from "../../../../public/home/hero-background-mobile.png"
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from "./style.module.css"
const HomeHero = () => {
    const t = useTranslations('Home');
  return (
    <>
      <Box width={'100%'}  height={{xs:'100vh', md:'100vh'}}>
          <Box   sx={{ position:'relative', width:'100%' , height:{xs:'100vh', md:'100vh'} , cursor:'pointer'}}>
                <Image src={HeroBackground} className={styles.desktop} alt={"title"} fill style={{objectFit:'cover'}} />
                <Image src={HeroBackgroundMobile} className={styles.mobile} alt={"title"} fill style={{objectFit:'cover'}} />
        <div className='container'>
                <div className={styles.homeHero}>
      <h1>{t('HomeHero.0')}</h1>
      <p>{t('HomeHero.1')}</p>
        </div>
        </div>
          </Box>

    </Box>

    </>
  )
}

export default HomeHero