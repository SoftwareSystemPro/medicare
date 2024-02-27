import React from 'react'
import styles from "./style.module.css"
import Our1 from "../../../../public/home/our-1.svg"
import Our2 from "../../../../public/home/our-2.svg"
import Our3 from "../../../../public/home/our-3.svg"
import Our4 from "../../../../public/home/our-4.svg"
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
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
                    <Image src={elem.image.url} width={200} height={150} alt='our partner'/>
                  </div>
            )}
      </Slider>
        </div>

    </div>
      </div>
  )
}

export default OurPartner