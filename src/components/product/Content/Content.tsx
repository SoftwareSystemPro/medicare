import { useTranslations } from "use-intl";
import styles from "./style.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ProductIcon from "../../../../public/product/content-icon.svg";
import ProductIcon2 from "../../../../public/product/content-icon2.svg";
import ProductIcon3 from "../../../../public/product/content-icon3.svg";
import Image from "next/image";

const Content = () => {
  const t = useTranslations();
  return (
    <div className={styles.content}>
      <h2>Перчатки нестерильные Unigloves</h2>
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
        <button className={styles.button}>{t('Product.7')}</button>
        <button className={styles.button_active}>{t('Product.8')}</button>
      </div>
    </div>
  );
};

export default Content;
