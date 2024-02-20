import styles from "./style.module.css";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslations } from "next-intl";
const Contact = () => {
  const t = useTranslations();
  const HandleSubmit = () => {
    console.log("okey");
  };
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.259786602861!2d69.19925337591627!3d41.34670677130514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c19be1e8d4f%3A0x4c587de675bc37b3!2z0LEsIEZhcm9iaSBrbydjaGFzaSAzLCDQotC-c2hrZW50LCBUb3Noa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1708169391041!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
