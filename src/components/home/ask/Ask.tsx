import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import AskBackground from "src/../public/home/ask-background.png"
import { useTranslations } from 'next-intl'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Ask = () => {
    const t = useTranslations('Home');
    const onSubmit = () => {
        console.log('okey');
        
    }
  return (
        <div className="container">
                <div className={styles.ask_section}>
                    <Image src={AskBackground} alt='ask question background'/>
                    <div className={styles.ask}>
                    <h2>{t('Ask.0')}</h2>
                    <form onSubmit={onSubmit} className={styles.form}>
                        <div className={styles.form_label}>
                        <PersonIcon sx={{color:'white'}}/>
                        <input required type="text" name='name' placeholder={t('Ask.1')} />
                        </div>
                        <div className={styles.form_label}>
                        <PhoneIcon sx={{color:'white'}}/>
                        <input required type="text" name='phone' placeholder={t('Ask.2')}/>
                        </div>
                        <div className={styles.form_label}>
                        <HelpOutlineIcon sx={{color:'white'}}/>
                        <input required type="text" name='comment' placeholder={t('Ask.3')}/>
                        </div>
                        <button>{t('Ask.4')}</button>
                    </form>
                    </div>
                </div>
        </div>
  )
}

export default Ask