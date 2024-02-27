import { useTranslations } from "use-intl";
import styles from "./style.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ProductIcon from "../../../../public/product/content-icon.svg";
import ProductIcon2 from "../../../../public/product/content-icon2.svg";
import ProductIcon3 from "../../../../public/product/content-icon3.svg";
import Image from "next/image";
import { ContentProps } from "./content.props";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Content = ({dataProduct}:ContentProps) => {
  const t = useTranslations();
  const {locale , query} = useRouter();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const existingCardDataJSON = localStorage.getItem('cardData');
    if (existingCardDataJSON) {
        const existingCardData = JSON.parse(existingCardDataJSON);
        const existingIndex = existingCardData.findIndex((item: { slug: string; }) => item.slug === dataProduct?.slug);
        if (existingIndex !== -1) {
            setQuantity(existingCardData[existingIndex].quantity);
        }
    }
}, [dataProduct?.slug]);


const HandleClickCard = () => {
  // Update localStorage with new or updated cardData
  const existingCardDataJSON = localStorage.getItem('cardData');
  let existingCardData = [];

  if (existingCardDataJSON) {
      existingCardData = JSON.parse(existingCardDataJSON);

      // Find the cardData in the existing array
      const existingIndex = existingCardData.findIndex((item: { slug: string; }) => item.slug === dataProduct.slug);

      if (existingIndex !== -1) {
          // If cardData exists, update its quantity
          existingCardData[existingIndex].quantity += 1;
          setQuantity(existingCardData[existingIndex].quantity);
      } else {
          // If cardData doesn't exist, add it to the array with quantity 1
          existingCardData.push({ ...dataProduct, quantity: 1 });
          setQuantity(1);
      }
  } else {
      // If no existing data, add cardData to array with quantity 1
      existingCardData.push({ ...dataProduct, quantity: 1 });
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

              existingCardData = existingCardData.filter((item: { slug: string; }) => item.slug !== dataProduct.slug);

              localStorage.setItem('cardData', JSON.stringify(existingCardData));
          }
      }
  }
}
  return (
    <div className={styles.content}>
      <h2>{locale == "ru" ? dataProduct?.titleRu:locale == "en" ? dataProduct?.titleEn:locale == "uz" ? dataProduct?.titleUz:null}</h2>
      <div className={styles.product_payment}>
        <div className={styles.product_payment_bottom}>
          <div className={styles.product_payment_top}>
            <LocalShippingIcon sx={{ color: "rgba(11, 63, 100, 1)" }} />
            <p>{t("Product.0")}</p>
          </div>
          <ul>
            <li>{t("Product.1")}</li>
          </ul>
        </div>
        <div className={styles.product_payment_bottom}>
          <div className={styles.product_payment_top}>
            <CreditCardIcon sx={{ color: "rgba(11, 63, 100, 1)" }} />
            <p>{t("Product.2")}</p>
          </div>
          <ul>
            <li>{t("Product.3")}</li>
          </ul>
        </div>
      </div>
      <div className={styles.product_network}>
        <div className={styles.product_network_card}>
          <Image src={ProductIcon} alt="Product image"/>
          <span>{t('Product.4')}</span>
        </div>
        <div className={styles.product_network_card}>
          <Image src={ProductIcon2} alt="Product image"/>
          <span>{t('Product.5')}</span>
        </div>
        <div className={styles.product_network_card}>
          <Image src={ProductIcon3} alt="Product image"/>
          <span>{t('Product.6')}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <a className={styles.button} href="tel:+998 (99) 701 30 22">{t('Product.7')}</a>
        {quantity > 0 && <button className={styles.decrement} onClick={handleDecrement}>-</button>}
                {quantity > 0 && <span className={styles.count}>{quantity}</span>}
                {quantity > 0 && <button className={styles.icrement} onClick={HandleClickCard}>+</button>}
                {quantity == 0 && <button className={styles.button_active} onClick={HandleClickCard}>{t('Card.1')}</button>}
      </div>
    </div>
  );
};

export default Content;
