import React from "react";
import CustomMenu from "./menu/CustomMenu";
import { Box } from "@mui/system";
// @ts-ignore
const ContainerCustom = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100wh",
        height: "calc(100vh + 30rem)",
        position: "relative",
        backgroundImage: "url('img/1 HOME.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          height: "100%",
        }}
      >
        <CustomMenu />
        {children}
      </Box>
    </Box>
  );
};

export default ContainerCustom;
