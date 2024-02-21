import React from 'react'
import styles from "./style.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useTranslations } from 'next-intl';
import { DropDownProps } from './dropdown.props';
import { useRouter } from 'next/router';
const DropDown = ({ handleDrawerClose }: DropDownProps) => {
    const dataDropDown = [1 ,2 ,3 ,4 ,5 ,6 ] 
    const router = useRouter();
    const { locale } = router;
    const t = useTranslations('Home')
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      handleDrawerClose(); 
      router.push(`/catalog/catalog${e.currentTarget.value}`)
  };

  return (
    <div className={styles.dropdown}>
    <div className={styles.dropdown_top}>
    <span className={styles.headerBottomDropDown}>{t('Header.2')} </span>
    <KeyboardArrowDownIcon sx={{color:'black'}}/>
    </div>
    <div className={styles.dropdown_content}>
        {dataDropDown.map((elem , index) => 
        <button key={index} value={elem} onClick={handleClick}>Перчатки нестерильные</button>
            )}
    </div>
    </div>
  )
}

export default DropDown