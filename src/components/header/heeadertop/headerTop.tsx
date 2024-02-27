import React from 'react';
import styles from "./style.module.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { GetServerSidePropsContext } from 'next';

const HeaderTop = () => {
  const router = useRouter();
  const { locales, locale, pathname, query, asPath } = router;
  const otherLocales = locales || [];
  const t = useTranslations('Home');
  return (
    <div className={styles.headerTop}>
      <div className={styles.headerCenter}>
        <a className={styles.headerTopPhone} href="tel:+998 (99) 701 30 22">
          <LocalPhoneIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
          +998 (99) 701 30 22
        </a>
        <a className={styles.headerTopPhone} href="tel:+998 (55) 901 30 22">{t('Header.1')}</a>
        <a className={styles.headerTopPhone} href="mailto:medicare@gmail.com">
          <MailOutlineIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
          medicare@gmail.com
        </a>
      </div>
      <div className={styles.headerLeft}>
        {otherLocales.map((otherLocale) => (
          <Link
            key={otherLocale}
            href={{ pathname, query }}
            as={asPath}
            locale={otherLocale}
          >
            <span className={ otherLocale === locale ? styles.activeLocaleLink : styles.localeLink}>{otherLocale}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HeaderTop;

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  const messages = require(`../../../../public/locales/${locale}.json`);
  return {
    props: {
      messages
    }
  };
}