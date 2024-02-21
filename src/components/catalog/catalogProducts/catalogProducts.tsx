import React from 'react'
import styles from './style.module.css'
import { DataCard } from 'src/services/fakedata'
import CardCommon from 'src/components/common/card/cardCommon'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTCARD } from 'src/services/product.query'
import { useRouter } from 'next/router'
import { CardProductType } from 'src/interface/card.type'
const CatalogProducts = () => {
  const {query} = useRouter();
  const {loading , error , data} = useQuery(GET_PRODUCTCARD,{
    variables:{categorySlug:query.catalog}
  })

  return (
    <div className={styles.catalogProduct}>
                {data?.products?.map((elem:CardProductType  ,index:number) => 
        <CardCommon key={index} cardData={elem}/>
        )}
    </div>
  )
}

export default CatalogProducts