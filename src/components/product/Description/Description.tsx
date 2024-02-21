import React from 'react'
import styles from "./style.module.css"
import { useTranslations } from 'next-intl'
import { ContentProps } from '../Content/content.props';
import { useRouter } from 'next/router';
const Description = ({dataProduct} : ContentProps ) => {
  const {locale} = useRouter();
  const t = useTranslations();
  return (
    <div className={styles.description}>
      <h3>{t('Product.9')}</h3>
      <hr />
      <div  className={styles.description} dangerouslySetInnerHTML={{__html: locale == "ru" ? dataProduct?.descriptionRu?.html : locale == "en" ? dataProduct?.descriptionEn?.html : locale == "uz" ? dataProduct?.descriptionUz?.html :dataProduct?.descriptionRu?.html}}>
              </div>
    </div>
  )
}

export default Description