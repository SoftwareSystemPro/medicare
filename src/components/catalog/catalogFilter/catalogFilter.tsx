import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "./style.module.css";
import { Fragment } from "react";
const CatalogFilter = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Box width={{ xs: "100%", md: "24%" }} sx={{display:{xs:'none' , md :'block'}}}>
      <Box
        position={"sticky"}
        top={"200px"}
        sx={{ transition: "all .3s ease" }}
      >
        <Box padding={"20px"} sx={{ background: "white" }} borderRadius={"3px"}>
          <Typography variant="h5" style={{ color: "#000000" }}>
            Category
          </Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" , overflowY:'scroll' , height:'350px', scrollbarColor:'rgba(11, 63, 100, 1) white'  , scrollbarWidth:'thin'}}
          >
            {data.map((elem) => (
              <Fragment key={elem}>
                <Button
                  fullWidth
                  sx={{
                    justifyContent: "space-between",
                    paddingTop:'20px',
                    paddingBottom:'15px',
                    color: "#000000",
                  }}
                  // onClick={()=>router.push(`/category/${elem.slug}`)}
                >
                  Перчатки нестерильные
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
