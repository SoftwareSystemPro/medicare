import { useTranslations } from "next-intl"
import styles from "./style.module.css"
import { DataCard } from "src/services/fakedata";
import CardCommon from "src/components/common/card/cardCommon";
const Similar = () => {
    const t = useTranslations();
  return (
    <div className={styles.similar}>
        <h2>{t('Product.10')}</h2>
        <div className={styles.cards}>
        {DataCard.slice(0 , 4).map((elem  ,index) => 
        <CardCommon key={index} cardData={elem}/>
        )}
        </div>
    </div>
  )
}

export default Similar