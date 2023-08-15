import React from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@chakra-ui/react";
type LayoutProps = {
  children: any;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // useAuth(); // will implement later at end of tutorial

  return (
    <>
      <Box backgroundColor="gray.100" minHeight="100vh">
        <Navbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
