import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Layout from "src/layout/layout";
import { Cart } from "src/interface/cart.type";
import Image from "next/image";
import { useRouter } from "next/router";
import DeleteIcon from '@mui/icons-material/Delete';
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
                {cartData.map((elem: Cart, index: number) => (
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
                    </h4>
                    <div className={styles.count}>
                    <button onClick={() => handleDecrement(index)}>{elem.quantity == 1 ? <DeleteIcon/> : "-"}</button>
                    <span>{elem.quantity}</span>
                    <button onClick={() => handleIncrement(index)}>+</button>
                    </div>
                  </div>
                ))}
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
