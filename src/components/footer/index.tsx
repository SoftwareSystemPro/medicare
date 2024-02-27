import React from "react";
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import LogoFooter from "../../../public/logo-footer.svg"
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import styles from "./style.module.css"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  const router = useRouter();
  const {locale} = router
  const t = useTranslations('Home');
  const navItems = [
    {
        route: '/about',
        label :t('Header.3')
    },
    {
        route: '/payment',
        label :t('Header.4')
    },
    {
        route: '/blogs',
        label :t('Header.5')
    },
    {
      route: '/contact',
      label :t('Header.6')
  }
  ]
  return (
    <Box
      padding={'20px'}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"rgba(11, 63, 100, 1)",
        color: "white",
      }}
    >
        <div className="container">
        <div className={styles.footer}>
      <Box onClick={() => router.push(`/${locale}`)} sx={{display:'flex' , alignItems:'center' , marginBottom:'20px' , marginTop:'20px'}}>
        <Image src={LogoFooter} alt='Logo Image'/>
      </Box>
      <List sx={{marginTop: {xs:'0px' , md:'20px'} }}>
        {navItems.map((item , index) => (
          <ListItem key={index}  onClick={() => router.push(`${locale}/${item.route}`)} disablePadding>
            <ListItemButton sx={{ textAlign: 'start'}}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{marginBottom: "20px" }}>
      <a className={styles.headerTopPhone} href="tel:+998 (99) 701 30 22">
          <LocalPhoneIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
          +998 (99) 701 30 22
        </a>
        <a className={styles.headerTopPhone} href="tel:+998 (55) 901 30 22">
          <LocalPhoneIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
          +998 (55) 901 30 22
        </a>
        <a className={styles.headerTopPhone} href="tel:medicare@gmail.com">
        <MailOutlineIcon sx={{marginRight:"7px" ,width:"20px", height:'20px'}}/> 
          medicare@gmail.com
        </a>
      </List>
      <List>
        <a className={styles.headerTopLocation} href="tel:medicare@gmail.com">
        <LocationOnIcon sx={{marginRight:"7px" ,width:"30px", height:'30px'}}/> 
        {t('Footer.1')}
        </a>
        <p className={styles.footerLeftBottom}>{t('Footer.2')}</p>
        <a className={styles.Network} href="">
          <InstagramIcon sx={{width:'30px', height:'30px'}}/>
        </a>
        <a className={styles.Network} href="">
        <TelegramIcon sx={{width:'30px', height:'30px'}}/>
        </a>
        <a className={styles.Network} href="">
        <FacebookIcon sx={{width:'30px', height:'30px'}}/>
        </a>
      </List>
      </div>
      <div className={styles.Company}>
          <h3>{t('Footer.0')}</h3>
      </div>
        </div>
    </Box>
  );
};

export default Footer;
