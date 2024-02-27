import Layout from "src/layout/layout";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from "./style.module.css";
import Seo from "src/layout/seo/seo";
const Contact = () => {
  const t = useTranslations("");
  return (
      <Seo  metaTitle={"Контакты"} metaDescription={"Наш адрес: Узбекистан, город Ташкент, ул.Фаробий, 3-Б."} metaKeywords={"Контакты"}>
            <Layout>
      <div className={styles.contact_section}>
        <h2>{t("Home.Header.6")}</h2>
        <div className="container">
          <div className={styles.contact}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.259786602861!2d69.19925337591627!3d41.34670677130514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c19be1e8d4f%3A0x4c587de675bc37b3!2z0LEsIEZhcm9iaSBrbydjaGFzaSAzLCDQotC-c2hrZW50LCBUb3Noa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1708169391041!5m2!1sru!2s"
            loading="lazy"
          ></iframe>
          <div className={styles.contact_box}>
            <p>{t("ContactPage.0")}</p>
            <a href="">
              <LocationOnIcon
                sx={{ marginRight: "7px", width: "20px", height: "20px" }}
              />
              {t("Home.Footer.1")}
            </a>
            <p>{t("ContactPage.1")}</p>

            <div className={styles.contact_phones}>
              <a href="+998 (99) 701 30 22<">
                <LocalPhoneIcon
                  sx={{ marginRight: "7px", width: "20px", height: "20px" }}
                />
                +998 (99) 701 30 22
              </a>
              <a href="+998 (55) 901 30 22">
                <LocalPhoneIcon
                  sx={{ marginRight: "7px", width: "20px", height: "20px" }}
                />
                +998 (55) 901 30 22
              </a>
            </div>
            <p>{t("ContactPage.2")}</p>
            <a href="mailto:medicare@gmail.com">
        <MailOutlineIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
                 medicare@gmail.com
              </a>
          </div>
          </div>
        </div>
      </div>
    </Layout>
      </Seo>
  );
};

export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: require(`../../../public/locales/${locale}.json`),
    },
  };
}
