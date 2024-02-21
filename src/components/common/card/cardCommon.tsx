import Image from 'next/image';
import { CardProps } from './card.props'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
const CardCommon = ({cardData} : CardProps) => {
    const t = useTranslations();

  
    const router = useRouter();
    const {locale} = router
    const HandleRouter = (e:React.MouseEvent<HTMLButtonElement>) => {
      router.push(`/product/${e.currentTarget.value}`)
    }
  return (  
    <div className={styles.Card} key={cardData.slug}>
        <div className={styles.Card_imgs}>
            <Image src={cardData.image1?.url} width={324} height={201} alt='card Image'/>
            <span>{cardData.category.categoryRu}</span>
        </div>
        <h4>{locale == 'ru' ? cardData.titleRu?.slice(0 ,36) : locale == 'uz' ? cardData.titleUz?.slice(0 ,36)  :locale == 'en' ? cardData.titleEn?.slice(0 ,36)  : null}...</h4>
        <div className={styles.card_buttons}>
            <button value={cardData.slug} onClick={HandleRouter}>{t('Card.0')}</button>
            <button >{t('Card.1')}</button>
        </div>
    </div>
  )
}

export default CardCommon