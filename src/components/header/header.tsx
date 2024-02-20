import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router';
import styles from "./style.module.css"
import Image from 'next/image';
import Logo from './../../../public/logo.svg'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HeaderTop from './heeadertop/headerTop';
import HeaderBottom from './headerbottom/headerBottom';
import { useTranslations } from 'next-intl';
import { GetServerSidePropsContext } from 'next';
import DropDown from './headerbottom/dropdown';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';
interface Props {
  window?: () => Window;
}

const drawerWidth = '100%';

export default function Navbar(props: Props) {
  const { window } = props;
  const t = useTranslations('Home');
  const router = useRouter();
  const { locales, locale, pathname, query, asPath } = router;
  const otherLocales = locales || [];
const navItems = [
  {
      route: '/category',
      label :t('Header.3')
  },
  {
      route: '/blog',
      label :t('Header.4')
  },
  {
      route: '/contact',
      label :t('Header.5')
  },
  {
    route: '/contact',
    label :t('Header.6')
}
]
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  const drawer = (
    <Box  sx={{ textAlign: 'center' }}>
      <Box sx={{display:'flex' , justifyContent:'space-between' ,alignItems:'center' ,paddingX:'20px'}}>
      <Box onClick={() => router.push(`/${locale}`)} sx={{display:'flex' , alignItems:'center'}}>
        <Image src={Logo} alt='Logo Image'/>
      </Box>
      <Box onClick={() => setMobileOpen(false)}>
      <CloseIcon/>
      </Box>
      </Box>
      <Divider />
      <List sx={{ padding:'10px'}}>
      <DropDown handleDrawerClose={handleDrawerClose}/>
        {navItems.map((item , index) => (
          <ListItem key={index}  onClick={() => { 
            setMobileOpen(false)
            router.push(`${locale}/${item.route}`)
          }} disablePadding>
            <ListItemButton sx={{ textAlign: 'start' , borderBottom:'1px solid gray'  }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <a className={styles.headerTopPhone} href="tel:+998 (99) 701 30 22">
          <LocalPhoneIcon sx={{marginRight:"7px" ,width:"30px", height:'30px'}}/> 
          +998 (99) 701 30 22
        </a>
        <a className={styles.headerTopPhone} href="tel:+998 (99) 701 30 22">
          <LocalPhoneIcon sx={{marginRight:"7px" ,width:"30px", height:'30px'}}/> 
          +998 (99) 701 30 22
        </a>
        <a className={styles.headerTopPhone} href="mailto:medicare@gmail.com">
          <MailOutlineIcon sx={{marginRight:"7px" ,width:"30px", height:'30px'}}/> 
          medicare@gmail.com
        </a>
        <div className={styles.headerLeft}>
        {otherLocales.map((otherLocale) => (
          <Link
            key={otherLocale}
            href={{ pathname, query }}
            as={asPath}
            locale={otherLocale}
            onClick={() =>  setMobileOpen(false)}
          >
            <span className={ otherLocale === locale ? styles.activeLocaleLink : styles.localeLink}>{otherLocale}</span>
          </Link>
        ))}
      </div>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
          <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar sx={{ backgroundColor:'white'}} component="nav">
      <Box sx={{display: { xs: 'none', md: 'block'}}}>
      <div className={styles.Top}><Typography>{t('Header.0')}</Typography></div>
      </Box>
          <div className='container'>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
      <Box onClick={() => router.push(`/${locale}`)} sx={{display:'flex' , alignItems:'center'}}>
        <Image src={Logo} alt='Logo Image'/>
      </Box>
          </Typography>
          <Box  sx={{ display: { xs: 'none', md: 'block' , width:'100%' } }} >
            <HeaderTop/>
            <hr />
            <HeaderBottom navItems={navItems}/>
          </Box>
            <div className={styles.header_cart}>
            <LocalMallIcon sx={{color:'rgba(11, 63, 100, 1)', width:'44px', height:'40px'}}/>
              <span>1</span>
            </div>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: 'none' }  , background:'rgba(11, 63, 100, 1)'}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        </div>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>

      </Box>
    </Box>
    </>
  );
}


export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  const messages = require(`../../../public/locales/${locale}.json`);
  return {
    props: {
      messages
    }
  };
}