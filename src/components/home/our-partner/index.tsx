import React from 'react'
import styles from "./style.module.css"
import Our1 from "../../../../public/home/our-1.svg"
import Our2 from "../../../../public/home/our-2.svg"
import Our3 from "../../../../public/home/our-3.svg"
import Our4 from "../../../../public/home/our-4.svg"
import Slider from "react-slick"
import Image from 'next/image'
const OurPartner = () => {
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
          <h2>Наши партнеры</h2>
          <Slider {...settings}>
        <div>
          <Image src={Our1} alt='our partner'/>
        </div>
        <div>
          <Image src={Our4} alt='our partner'/>
        </div>
        <div>
          <Image src={Our3} alt='our partner'/>
        </div>
        <div>
          <Image src={Our4} alt='our partner'/>
        </div>
        <div>
          <Image src={Our3} alt='our partner'/>
        </div>
        <div>
          <Image src={Our2} alt='our partner'/>
        </div>
        <div>
          <Image src={Our1} alt='our partner'/>
        </div>
        <div>
          <Image src={Our4} alt='our partner'/>
        </div>
      </Slider>
        </div>

    </div>
      </div>
  )
}

export default OurPartner