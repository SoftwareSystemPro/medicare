import React from 'react'
import styles from './style.module.css'
import { DataCard } from 'src/services/fakedata'
import CardCommon from 'src/components/common/card/cardCommon'
const CatalogProducts = () => {
  return (
    <div className={styles.catalogProduct}>
                {DataCard.map((elem  ,index) => 
        <CardCommon key={index} cardData={elem}/>
        )}
    </div>
  )
}

export default CatalogProducts