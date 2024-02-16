import React from 'react'
import styles from "./style.module.css"
import {DataCard} from "../../../services/fakedata"
import CardCommon from 'src/components/common/card/cardCommon'
import XitBackground from "src/../public/home/xit-background.svg"
import Image from 'next/image'
import { useTranslations } from 'next-intl'
const HomeXit = () => {
  const t = useTranslations('Home');
  return (
    <div className="container">
        <div className={styles.xit}>
          <div className={styles.xit_card}>
          <Image src={XitBackground} width={324} height={411}  style={{objectFit:'cover'}} alt='xit Image'/>
          <h3>{t("Xit.0")}</h3>
          </div>
        {DataCard.map((elem) => 
        <CardCommon cardData={elem}/>
        )}
        </div>
    </div>
  )
}

export default HomeXit