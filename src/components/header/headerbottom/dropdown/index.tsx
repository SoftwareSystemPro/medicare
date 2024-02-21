import React from 'react'
import styles from "./style.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';
import { DropDownProps } from './dropdown.props';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from 'src/services/category.query';
import { CategoryType } from 'src/interface/category.type';
const DropDown = ({ handleDrawerClose }: DropDownProps) => {
    const {loading ,error ,data} = useQuery(GET_CATEGORIES)
    
    const router = useRouter();
    const { locale } = router;
    const t = useTranslations('Home')
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      handleDrawerClose(); 
      router.push(`/catalog/${e.currentTarget.value}`)
  };

  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown_top}>
    <span className={styles.headerBottomDropDown}>{t('Header.2')} </span>
    <KeyboardArrowDownIcon sx={{color:'black'}}/>
    </div>
    <div className={styles.dropdown_content}>
        {data?.categories?.map((elem:CategoryType , index:number) => 
        <button key={index} value={elem.categorySlug} onClick={handleClick}>{locale == "ru" ? elem.categoryRu: locale == "en" ? elem.categoryEn:locale == "uz" ? elem.categoryUz:elem.categoryRu}</button>
            )}
    </div>
    </div>
  )
}

export default DropDown