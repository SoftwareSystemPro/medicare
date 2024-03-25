import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Layout from "src/layout/layout";
import { Cart } from "src/interface/cart.type";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router";
const CartPage = () => {
  const t = useTranslations();
  const { locale } = useRouter();
  const router = useRouter();
  const [cartData, setCartData] = React.useState<Cart[]>([]);
  
    
  useEffect(() => {
    const cardDataJSON = localStorage.getItem('cardData');
    if (cardDataJSON) {
      const cardData = JSON.parse(cardDataJSON);
      setCartData(cardData);
    }
  }, []);
  const handleIncrement = (index: number) => {
    const updatedCartData = [...cartData];
    updatedCartData[index].quantity += 1;
    setCartData(updatedCartData);
    localStorage.setItem("cardData", JSON.stringify(updatedCartData));
  };

  const handleDecrement = (index: number) => {
    const updatedCartData = [...cartData];
    if (updatedCartData[index].quantity > 0) {
      updatedCartData[index].quantity -= 1;
      setCartData(updatedCartData);
      localStorage.setItem("cardData", JSON.stringify(updatedCartData));
    }
    
    // If the quantity becomes 0, remove the item from cartData and update localStorage
    if (updatedCartData[index].quantity === 0) {
      updatedCartData.splice(index, 1); // Remove the item from the array
      setCartData(updatedCartData);
      localStorage.setItem("cardData", JSON.stringify(updatedCartData));
    }
  };
  const handleDeleteItem = (index: number) => {
    const updatedCartData = [...cartData];
    updatedCartData.splice(index, 1); // Remove the item from the array
    setCartData(updatedCartData);
    localStorage.setItem("cardData", JSON.stringify(updatedCartData));
  };

  return (
    <Layout>
      <div className={styles.cart_section}>
        <div className="container">
          <div className={styles.Cart}>
            <h2>{t("Cart.0")}</h2>
            <div className={styles.cart_box}>
              <div className={styles.cart_box_top}>
                <div className={styles.cart_box_top_left}>
                  <h3>{t("Cart.1")} {cartData.length}</h3>
                  <p>{t("Cart.2")}</p>
                </div>
                {cartData.length  !== 0 ? <button onClick={() => router.push('/order')}>{t("Cart.3")}</button>  :null}
                
              </div>
              <div className={styles.cart_cards}>
                {cartData.map((elem: Cart, index: number) => {
  
    const quantitiesWithNonZeroValues = Object.entries(elem?.quantities)
      .filter(([_, value]) => value !== 0)
      .map(([key, value]) => ({ size: key, quantity: value }));

  return (
    <div key={index} className={styles.cart}>
      <Image
        src={elem.image1.url}
        width={300}
        height={200}
        alt="category"
      />
      <h4>
        {locale == "ru"
          ? elem.titleRu
          : locale == "en"
          ? elem.titleEn
          : locale == "uz"
          ? elem.titleUz
          : elem.titleRu}
                <ul className={styles.size_count_item}>
        {quantitiesWithNonZeroValues.map((elem , index) => 
        <li key={index} className={styles.size_count_list}><span>{t('Cart.7')}: {elem.size}</span> <span>  {elem.quantity} шт</span></li>
          )}
      </ul>
      </h4>

      <button className={styles.delete_button} onClick={() => handleDeleteItem(index)}>
                    <CloseIcon />
                  </button>
    </div>
  );
})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../../public/locales/${locale}.json`),
    },
  };
}
