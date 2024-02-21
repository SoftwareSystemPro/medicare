import Image from 'next/image';
import { CardProps } from './card.props'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
const CardCommon = ({cardData} : CardProps) => {
    const t = useTranslations();
    const router = useRouter();
    const {locale} = router
    const HandleRouter = () => {
      router.push(`/product/salom`)
    }
  return (  
    <div className={styles.Card} key={cardData.id}>
        <div className={styles.Card_imgs}>
            <Image src={cardData.image} width={324} height={201} alt='card Image'/>
            <span>{cardData.category}</span>
        </div>
        <h4>{locale == 'ru' ? cardData.title_ru.slice(0 ,40) : locale == 'uz' ? cardData.title_uz.slice(0 ,40)  :locale == 'en' ? cardData.title_en.slice(0 ,40)  : null}...</h4>
        <div className={styles.card_buttons}>
            <button onClick={HandleRouter}>{t('Card.0')}</button>
            <button>{t('Card.1')}</button>
        </div>
    </div>
  )
}

export default CardCommon