import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./style.module.css";
import { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "src/services/category.query";
import { CategoryType } from "src/interface/category.type";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
const CatalogFilter = () => {
  const router = useRouter()
  const {locale } = useRouter();
  const t = useTranslations()
  const {loading ,error ,data} = useQuery(GET_CATEGORIES)
  return (
    <Box width={{ xs: "100%", md: "24%" }} sx={{display:{xs:'none' , md :'block'}}}>
      <Box
        position={"sticky"}
        top={"200px"}
        sx={{ transition: "all .3s ease"  , marginTop:"20px"}}
      >
        <Box padding={"20px"} sx={{ background: "white" }} borderRadius={"3px"}>
          <Typography variant="h5" style={{ color: "#000000" }}>
            {t('Card.2')}
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" , overflowY:'scroll' , height:'350px', scrollbarColor:'rgba(11, 63, 100, 1) white'  , scrollbarWidth:'thin'}}
          >
            {data?.categories?.map((elem:CategoryType , index : number) => (
              <Fragment key={index}>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: "space-between",
                    paddingTop:'20px',
                    paddingBottom:'15px',
                    color: "#000000",
                    textAlign:'start'
                  }}
                  onClick={()=>router.push(`/catalog/${elem.categorySlug}`)}
                >
                  {locale == "ru" ? elem.categoryRu: locale == "en" ? elem.categoryEn:locale == "uz" ? elem.categoryUz:elem.categoryRu}
                  <ArrowForwardIosIcon />
                </Button>
                <Divider sx={{ backgroundColor: "gray" }} />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogFilter;
