import React from 'react'
import styles from "./style.module.css"
import Slider from "react-slick"
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_PARTNERS } from 'src/services/partners.query'
import { Partners } from 'src/interface/partner.type'
import { useTranslations } from 'use-intl'
const OurPartner = () => {
  const t = useTranslations();
  const {loading , error , data} = useQuery(GET_PARTNERS)
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll:7,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }
    ]
  };
  return (
      <div className={styles.section_our_partner}>
            <div className='container'>
        <div className={styles.our_partners}>
          <h2>{t('Home.HomeHero.2')}</h2>
          <Slider {...settings}>
            {data?.partners_image?.map((elem:Partners , index:number) => 
                    <div key={index} className={styles.card}>
                    <Image src={elem?.image?.url} width={150} height={100} alt='our partner'/>
                  </div>
            )}
      </Slider>
        </div>

    </div>
      </div>
  )
}

export default OurPartner