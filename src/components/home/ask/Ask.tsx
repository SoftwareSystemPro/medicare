import React, { useEffect, useRef, useState } from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import AskBackground from "src/../public/home/ask-background.png"
import { useTranslations } from 'next-intl'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
const Ask = () => {
    const t = useTranslations('Home');
  const [modal , setModal] = useState(false);

    const TOKEN = '7150616808:AAGZSMkQJ5f-W2F7ospjngOvEH2ksYINLg0';
    const CHAT_ID = '-1002043831874';
    const onSubmit = async (body:any) => {
        body.preventDefault()
        const info = `Имя : ${body.target.name.value} %0AНомер телефона: ${body.target.phone.value} %0Aкомментарий: ${body.target.comment.value}`
        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`)
        body.target.name.value = null
        body.target.phone.value = null
        body.target.comment.value = null
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
        <div className="container">
                <div className={styles.ask_section}>
                    <Image src={AskBackground} alt='ask question background'/>
                    <div className={styles.ask}>
                    <h2>{t('Ask.0')}</h2>
                    <form onSubmit={onSubmit} className={styles.form}>
                        <div className={styles.form_label}>
                        <PersonIcon sx={{color:'white'}}/>
                        <input required  type="text" name='name' placeholder={t('Ask.1')} />
                        </div>
                        <div className={styles.form_label}>
                        <PhoneIcon sx={{color:'white'}}/>
                        <input required type="text" name='phone' placeholder={t('Ask.2')}/>
                        </div>
                        <div className={styles.form_label}>
                        <HelpOutlineIcon sx={{color:'white'}}/>
                        <input required type="text" name='comment' placeholder={t('Ask.3')}/>
                        </div>
                        <button type='submit'>{t('Ask.4')}</button>
                    </form>
                    </div>
                </div>
                <div className={modal == false ? styles.modal_Success_no_active : styles.modal_Success}>
            <TaskAltIcon sx={{color:'green' , marginRight:"10px"}}/>
            <span>{t('0')}</span>
        </div>
        </div>
  )
}

export default Ask