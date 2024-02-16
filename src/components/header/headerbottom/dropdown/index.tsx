import React from 'react'
import styles from "./style.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';
import { DropDownProps } from './dropdown.props';
const DropDown = ({ handleDrawerClose }: DropDownProps) => {
    const dataDropDown = [1 ,2 ,3 ,4 ,5 ,6 ] 
    const t = useTranslations('Home')
    const handleClick = () => {
      handleDrawerClose(); // Call the handleDrawerClose function passed as a prop
  };

  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown_top}>
    <span className={styles.headerBottomDropDown}>{t('Header.2')} </span>
    <KeyboardArrowDownIcon sx={{color:'black'}}/>
    </div>
    <div className={styles.dropdown_content}>
        {dataDropDown.map((elem , index) => 
        <button key={index} onClick={handleClick}>Перчатки нестерильные</button>
            )}
    </div>
    </div>
  )
}

export default DropDown