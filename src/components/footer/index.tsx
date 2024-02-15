import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      padding={'20px'}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:"#ca889a",
        color: "white",
      }}
    >
      <Typography>© Atambaev. All Right Reserved.</Typography>
      
    </Box>
  );
};

export default Footer;
