import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import PaymentIcon from "../../../../public/payment/payment-icon5.svg";
import { useTranslations } from "next-intl";
const PaymentDelivery = () => {
  const t = useTranslations();
  return (
    <div className={styles.payment_delivery}>
      <h3>
        <Image
          className={styles.payment_delivery_box_top_image}
          src={PaymentIcon}
          alt="PaymentIcon"
        />
        {t("Payment.7")}
      </h3>

      <div className={styles.payment_delivery_cards}>
          <div className={styles.payment_delivery_card}>
              <h3>{t('Payment.8')}</h3>
              <p>{t('Payment.9')}</p>
          </div>
          <div className={styles.payment_delivery_card}>
              <h3>{t('Payment.10')}</h3>
              <p>{t('Payment.11')}</p>
          </div>
      </div>
    </div>
  );
};

export default PaymentDelivery;
