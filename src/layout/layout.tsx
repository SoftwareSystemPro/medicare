import { Box } from "@mui/material";
import Footer from "../components/footer";
import Header from "../components/header/header";
import { LayoutProps } from "./layout.props";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header/>
      <Box minHeight={'90vh'}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;

