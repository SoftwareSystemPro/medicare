import Image from 'next/image';
import { CardProps } from './card.props'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CardCommon = ({ cardData }: CardProps) => {
    const t = useTranslations();
    const router = useRouter();
    const { locale } = router;
    const [quantity, setQuantity] = useState(0);
  
    useEffect(() => {
        const existingCardDataJSON = localStorage.getItem('cardData');
        if (existingCardDataJSON) {
            const existingCardData = JSON.parse(existingCardDataJSON);
            const existingIndex = existingCardData.findIndex((item: { slug: string; }) => item.slug === cardData.slug);
            if (existingIndex !== -1) {
                setQuantity(existingCardData[existingIndex].quantity);
            }
        }
    }, [cardData.slug]);

    const HandleRouter = (e: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/product/${e.currentTarget.value}`);
    }

    const HandleClickCard = () => {
        // Update localStorage with new or updated cardData
        const existingCardDataJSON = localStorage.getItem('cardData');
        let existingCardData = [];

        if (existingCardDataJSON) {
            existingCardData = JSON.parse(existingCardDataJSON);

            // Find the cardData in the existing array
            const existingIndex = existingCardData.findIndex((item: { slug: string; }) => item.slug === cardData.slug);

            if (existingIndex !== -1) {
                // If cardData exists, update its quantity
                existingCardData[existingIndex].quantity += 1;
                setQuantity(existingCardData[existingIndex].quantity);
            } else {
                // If cardData doesn't exist, add it to the array with quantity 1
                existingCardData.push({ ...cardData, quantity: 1 ,  size : ['xs' , 'xxl'] });
                setQuantity(1);
            }
        } else {
            // If no existing data, add cardData to array with quantity 1
            existingCardData.push({ ...cardData, quantity: 1  , size : ['xs' , 'xxl']});
            setQuantity(1);
        }

        // Store the updated array back into localStorage
        localStorage.setItem('cardData', JSON.stringify(existingCardData));
    }

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);

            if (quantity === 1) {
                const existingCardDataJSON = localStorage.getItem('cardData');
                let existingCardData = [];

                if (existingCardDataJSON) {
                    existingCardData = JSON.parse(existingCardDataJSON);

                    existingCardData = existingCardData.filter((item: { slug: string; }) => item.slug !== cardData.slug);

                    localStorage.setItem('cardData', JSON.stringify(existingCardData));
                }
            }
        }
    }

    return (
        <div className={styles.Card} key={cardData.slug}>
            <div className={styles.Card_imgs}>
            <button value={cardData.slug} className={styles.text_button}  onClick={HandleRouter}>
            <Image  src={cardData.image1?.url} width={324} height={201} alt='card Image' />
            </button>
                <span>{locale == 'ru' ? cardData.category.categoryRu : locale == 'en' ? cardData.category.categoryEn : locale == 'uz' ? cardData.category.categoryUz : cardData.category.categoryRu}</span>
            </div>
            <button value={cardData.slug} className={styles.text_button}  onClick={HandleRouter}>         <h4 >{locale == 'ru' ? cardData.titleRu?.slice(0, 36) : locale == 'uz' ? cardData.titleUz?.slice(0, 36) : locale == 'en' ? cardData.titleEn?.slice(0, 36) : null}...</h4></button>
            <div className={styles.card_buttons}>
                <button value={cardData.slug} className={styles.slug} onClick={HandleRouter}>{t('Card.0')}</button>
                {quantity > 0 && <button className={styles.decrement} onClick={handleDecrement}>-</button>}
                {quantity > 0 && <span className={styles.count}>{quantity}</span>}
                {quantity > 0 && <button className={styles.icrement} onClick={HandleClickCard}>+</button>}
                {quantity <= 0 &&  <button value={cardData.slug} className={styles.add} onClick={HandleClickCard}>{t('Card.1')}</button> }
                
            </div>
        </div>
    )
}

export default CardCommon;
