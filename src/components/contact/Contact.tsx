import styles from "./style.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslations } from "next-intl";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useEffect, useState } from "react";
const Contact = () => {
  const t = useTranslations();
  const TOKEN = '6773056811:AAF8NQ7ue2g20sGhga8LBurfjY11ClAk7sk';
  const CHAT_ID = '-1001836346935';
  const [modal , setModal] = useState(false);
  const HandleSubmit = async (body:any) => {
      body.preventDefault()
      const info = `Имя : ${body.target.name.value} %0AНомер телефона: ${body.target.phone.value} `
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`)
      body.target.name.value = null
      body.target.phone.value = null
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
      <div className={styles.contact}>
        <div className={styles.form_wrapper}>
            <h2>{t('Contact.0')}</h2>
            <p>{t('Contact.1')}</p>
        <form onSubmit={HandleSubmit} className={styles.form}>
          <div className={styles.form_label}>
            <PersonIcon sx={{ color: "white" }} />
            <input required type="text" name="name" placeholder={t("Home.Ask.1")} />
          </div>
          <div className={styles.form_label}>
            <PhoneIcon sx={{ color: "white" }} />
            <input required type="text" name="phone" placeholder={t("Home.Ask.2")} />
          </div>
          <button>{t("Home.Ask.4")}</button>
        </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2167.39125816255!2d69.25305108415378!3d41.15917932334521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b50cc2b65d5%3A0x17da5455ab93fb0!2sOOO%20Medicare!5e0!3m2!1sru!2s!4v1710483273333!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
      <div className={modal == false ? styles.modal_Success_no_active : styles.modal_Success}>
        <TaskAltIcon sx={{color:'green' , marginRight:"10px"}}/>
        <span>{t('Home.0')}</span>
      </div>
    </div>
  );
};

export default Contact;
