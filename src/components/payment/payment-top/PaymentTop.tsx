import React from "react";
import styles from "./style.module.css";
import { useTranslations } from "next-intl";
import PaymentIcon from "../../../../public/product/content-icon3.svg";
import PaymentIcon1 from "../../../../public/payment/payment-icon1.svg";
import PaymentIcon2 from "../../../../public/payment/payment-icon2.svg";
import PaymentIcon3 from "../../../../public/payment/payment-icon3.svg";
import PaymentIcon4 from "../../../../public/payment/payment-icon4.svg";
import Image from "next/image";
const PaymentTop = () => {
  const t = useTranslations();
  return (
    <div className={styles.payment_top}>
      <h2>{t("Payment.0")}</h2>
      <div className={styles.payment_box}>
        <h3>
          <Image
            className={styles.payment_box_top_image}
            src={PaymentIcon}
            alt="PaymentIcon"
          />
          {t("Payment.1")}
        </h3>
        <div className={styles.payment_box_cards}>
          <div className={styles.payment_box_card}>
            <h3>{t("Payment.2")}</h3>
            <p>
              {t("Payment.3")} <Image src={PaymentIcon1} alt="Icon Payment" />
            </p>
          </div>
          <div className={styles.payment_box_card}>
            <h3>{t("Payment.4")}</h3>
            <div className={styles.payment_box_card_images}>
              <Image src={PaymentIcon2} alt="Icon Payment" />
              <Image src={PaymentIcon3} alt="Icon Payment" />
            </div>
          </div>
          <div className={styles.payment_box_card}>
            <h3>{t("Payment.5")}</h3>
            <p>
              {t("Payment.6")} <Image src={PaymentIcon4} alt="Icon Payment" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentTop;
