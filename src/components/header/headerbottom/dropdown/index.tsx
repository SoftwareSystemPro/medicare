import React from 'react'
import styles from "./style.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';
const DropDown = () => {
    const dataDropDown = [1 ,2 ,3 ,4 ,5 ,6 ] 
    const t = useTranslations('Home')
  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown_top}>
    <span className={styles.headerBottomDropDown}>{t('Header.2')} </span>
    <KeyboardArrowDownIcon sx={{color:'black'}}/>
    </div>
    <div className={styles.dropdown_content}>
        {dataDropDown.map((elem , index) => 
        <button key={index}>Перчатки нестерильные</button>
            )}
    </div>
    </div>
  )
}

export default DropDown