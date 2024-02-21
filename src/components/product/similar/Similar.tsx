import { useTranslations } from "next-intl"
import styles from "./style.module.css"
import { DataCard } from "src/services/fakedata";
import CardCommon from "src/components/common/card/cardCommon";
import { ContentProps } from "../Content/content.props";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTCARD } from "src/services/product.query";
import { CardProductType } from "src/interface/card.type";
const Similar = ({dataProduct}:ContentProps) => {
    const t = useTranslations();
    const {loading ,error , data} = useQuery(GET_PRODUCTCARD , {
      variables:{categorySlug : dataProduct?.category?.categorySlug}
    })
    
  return (
    <div className={styles.similar}>
        <h2>{t('Product.10')}</h2>
        <div className={styles.cards}>
        {data?.products?.slice(0,  4).map((elem:CardProductType  ,index:number) => 
        <CardCommon key={index} cardData={elem}/>
        )}
        </div>
    </div>
  )
}

export default Similar