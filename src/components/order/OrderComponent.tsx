import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl'
import { Cart } from 'src/interface/cart.type';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const OrderComponent = () => {
    const t = useTranslations();
    const [cartData, setCartData] =useState<Cart[]>([]);
  const [modal , setModal] = useState(false);
    const {locale} = useRouter();
    const router = useRouter();
    const TOKEN = '6827409499:AAHVhKRfxaq4JxsEPb9makj_qTITcYiKgbw';
    const CHAT_ID = '-1002024057634';
    useEffect(() => {
      const cardDataJSON = localStorage.getItem('cardData');
      if (cardDataJSON) {
        const cardData = JSON.parse(cardDataJSON);
        setCartData(cardData);
      }
    }, []);
    const HandleSubmit = async (body:any) => {
      body.preventDefault()
      const info = `Имя : ${body.target.name.value} %0AНомер телефона: ${body.target.phone.value} %0Aemail: ${body.target.email.value} %0Aкомментарий: ${body.target.comment.value} %0A%0AПродукт :  ${cartData.map(elem => 
          `${elem.titleRu}  ${elem.quantity} шт %0A ___________________________________ %0A`
        )}`
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`)
      body.target.name.value = null
      body.target.phone.value = null
      localStorage.removeItem('cardData')
      router.push('/')
       setModal(true)
  }
  useEffect(() => {
    setTimeout(() => {
      if (modal == true) {
        setModal(false)
      }
    }, 4000)
  }, [modal])
  
  return (
    <div className={styles.section_order}>
        <h2>{t('Order.0')}</h2>
      <div className='container'> 
      <div className={styles.order}>
      <div className={styles.order_form}>
            <form onSubmit={HandleSubmit}>
              <div className={styles.input}>
                <p>{t('Order.1')}</p>
                <input required name='name' type="text" placeholder={t('Order.2')} />
              </div>
              <div className={styles.input}>
                <p>{t('Order.3')}</p>
                <input required name='phone' type="text" placeholder={'+998 (__) ___-__-__'} />
              </div>
              <div className={styles.input}>
                <p>{t('Order.4')}</p>
                <input required name='email' type="email" placeholder={t('Order.4')} />
              </div>
              <div className={styles.input}>
                <p>{t('Order.5')}</p>
                <textarea required name='comment' placeholder={t('Order.6')} />
              </div>
              {cartData.length  !== 0 ? <button type='submit'>{t('Order.6')}</button> : null}
            
            </form>
        </div>
        <div className={styles.order_box}>
          <h3>{t('Order.8')}</h3>
        {cartData.map((elem , index) => 
                            <div key={index} className={styles.cart}>
                            <Image
                              src={elem.image1.url}
                              width={300}
                              height={200}
                              alt="category"
                            />
                      <div className={styles.cart_content}>
                      <h4>
                              {locale == "ru"
                                ? elem.titleRu
                                : locale == "en"
                                ? elem.titleEn
                                : locale == "uz"
                                ? elem.titleUz
                                : elem.titleRu}
                            </h4>
                            <span>{elem.quantity} {t('Order.9')}</span>
                      </div>
                          </div>
        )}
        </div>
      </div>
      </div>
      <div className={modal == false ? styles.modal_Success_no_active : styles.modal_Success}>
        <TaskAltIcon sx={{color:'green' , marginRight:"10px"}}/>
        <span>{t('Home.0')}</span>
      </div>
    </div>
  )
}

export default OrderComponent