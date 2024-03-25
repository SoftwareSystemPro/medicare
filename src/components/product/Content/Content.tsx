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
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Content = ({ dataProduct }: ContentProps) => {
    const t = useTranslations();
    const router = useRouter();
    const { locale, query  } = useRouter();
    const [modal , setModal] = useState(false);
    const HandleClickModal = () => {
        setModal(true)
    }
    useEffect(() => {
        setTimeout(() => {
          if (modal == true) {
            setModal(false)
            router.push('/cart')
          }
        }, 4000)
      }, [modal])
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    useEffect(() => {
        const existingCardDataJSON = localStorage.getItem('cardData');
        if (existingCardDataJSON) {
            const existingCardData = JSON.parse(existingCardDataJSON);
            const productData = existingCardData.find((item: { slug: string }) => item.slug === dataProduct?.slug);
            if (productData) {
                setQuantities(productData.quantities || {});
            }
        }
    }, [dataProduct?.slug]);

    const handleSizeButtonClick = (size: string) => {
        const existingCardDataJSON = localStorage.getItem('cardData');
        let existingCardData = [];

        if (existingCardDataJSON) {
            existingCardData = JSON.parse(existingCardDataJSON);
        }

        const existingIndex = existingCardData.findIndex((item: { slug: string; size: string }) => item.slug === dataProduct.slug && item.size === size);

        if (existingIndex !== -1) {
            existingCardData[existingIndex].size = size;
        } else {
            // Add the new size with initial count
            existingCardData.push({ ...dataProduct, quantities: { ...quantities, [size]: 0 }, size: size });
        }

        localStorage.setItem('cardData', JSON.stringify(existingCardData));

        // Update state with the new quantities object
        const productData = existingCardData.find((item: { slug: string }) => item.slug === dataProduct?.slug);
        if (productData) {
            setQuantities(productData.quantities || {});
        }
    }

    const handleDecrement = (size: string) => {
        if (quantities[size] > 0) {
            const updatedQuantities = { ...quantities, [size]: (quantities[size] || 0) - 1 };
            setQuantities(updatedQuantities);

            const existingCardDataJSON = localStorage.getItem('cardData');
            let existingCardData = [];

            if (existingCardDataJSON) {
                existingCardData = JSON.parse(existingCardDataJSON);
                const existingIndex = existingCardData.findIndex((item: { slug: string }) => item.slug === dataProduct.slug);
                if (existingIndex !== -1) {
                    existingCardData[existingIndex].quantities = updatedQuantities;
                    localStorage.setItem('cardData', JSON.stringify(existingCardData));
                }
            }
        }
    }

    const HandleClickCard = (size: string) => {
        const updatedQuantities = { ...quantities, [size]: (quantities[size] || 0) + 1 };
        setQuantities(updatedQuantities);
  
        const existingCardDataJSON = localStorage.getItem('cardData');
        let existingCardData = [];
  
        if (existingCardDataJSON) {
            existingCardData = JSON.parse(existingCardDataJSON);
            const existingIndex = existingCardData.findIndex((item: { slug: string }) => item.slug === dataProduct.slug);
            if (existingIndex !== -1) {
                existingCardData[existingIndex].quantities = updatedQuantities;
            } else {
                existingCardData.push({ ...dataProduct, quantities: updatedQuantities });
            }
        } else {
            existingCardData.push({ ...dataProduct, quantities: updatedQuantities });
        }
  
        // Check if count is 0 and remove the item from localStorage
        if (updatedQuantities[size] === 0) {
            const filteredCardData = existingCardData.filter((item: { slug: string }) => item.slug !== dataProduct.slug);
            localStorage.setItem('cardData', JSON.stringify(filteredCardData));
        } else {
            localStorage.setItem('cardData', JSON.stringify(existingCardData));
        }
    }
  
    return (
        <>
                <div className={styles.content}>
            <h2>{locale == "ru" ? dataProduct?.titleRu : locale == "en" ? dataProduct?.titleEn : locale == "uz" ? dataProduct?.titleUz : null}</h2>
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
                        <CreditCardIcon
                        sx={{ color: "rgba(11, 63, 100, 1)" }}
                        />
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
            <h3>{t('Product.11')} : {dataProduct?.price} uzs</h3>
            {dataProduct?.size?.map((elem , index) =>
                <div className={styles.icrement_buttons} key={index}>
                    <button className={styles.button_size} onClick={() => handleSizeButtonClick(elem.size)}>{elem.size}</button>
                    <div style={{display:'flex' , alignItems:'center'}}>
                    <button className={styles.decrement} onClick={() => handleDecrement(elem.size)}>-</button>
                    <span className={styles.count}>{quantities[elem.size] || 0}</span>
                    <button className={styles.icrement} onClick={() => HandleClickCard(elem.size)}>+</button>
                    </div>
                </div>
            )}
            <div className={styles.buttons}>
                <a className={styles.button} href={dataProduct?.pdf?.url}>{t('Product.7')}</a>
                <a className={styles.button_active} onClick={HandleClickModal}>{t('Product.8')}</a>
            </div>
 
        </div>
                   <div className={modal == false ? styles.modal_Success_no_active : styles.modal_Success}>
                   <TaskAltIcon sx={{color:'green' , marginRight:"10px"}}/>
                   <span>{t('Product.12')}</span>
                 </div>
        </>
    );
};

export default Content;
