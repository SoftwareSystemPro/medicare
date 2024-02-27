import React from 'react'
import styles from "./style.module.css"
import CardCommon from 'src/components/common/card/cardCommon'
import XitBackground from "src/../public/home/xit-background.svg"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTCARD } from 'src/services/product.query'
import { CardProductType } from 'src/interface/card.type'
import { useRouter } from 'next/router'
const HomeXit = () => {
  const t = useTranslations('Home');
  const router = useRouter();
  const {loading , error , data} = useQuery(GET_PRODUCTCARD , {
    variables : {categorySlug :  "top-mahsulotlar"}
  })
  return (
    <div className="container">
        <div className={styles.xit}>
          <div className={styles.xit_card} onClick={()=>router.push(`/catalog/top-mahsulotlar`)}>
          <Image src={XitBackground} width={324} height={411}  style={{objectFit:'cover'}} alt='xit Image'/>
          <h3>{t("Xit.0")}</h3>
          </div>
        {data?.products?.slice(0  , 7).map((elem:CardProductType , index:number) => 
        <CardCommon key={index} cardData={elem}/>
        )}
        </div>
    </div>
  )
}

export default HomeXit