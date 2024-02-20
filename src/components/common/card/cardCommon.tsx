import Image from 'next/image';
import { CardProps } from './card.props'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl';
const CardCommon = ({cardData} : CardProps) => {
    const t = useTranslations();
  return (  
    <div className={styles.Card} key={cardData.id}>
        <div className={styles.Card_imgs}>
            <Image src={cardData.image} width={324} height={201} alt='card Image'/>
            <span>{cardData.category}</span>
        </div>
        <h4>{cardData.title.slice(0 ,40)}...</h4>
        <div className={styles.card_buttons}>
            <button>{t('Card.0')}</button>
            <button>{t('Card.1')}</button>
        </div>
    </div>
  )
}

export default CardCommon