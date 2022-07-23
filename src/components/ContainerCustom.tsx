import React from "react";
import CustomMenu from "./menu/CustomMenu";
import { Box } from "@mui/system";
// @ts-ignore
const ContainerCustom = ({ children, bg }) => {
  let bgUrl = "";
  if (bg === "home") {
    bgUrl = "url('img/1 HOME.jpg')";
  }
  if (bg === "nosotros") {
    bgUrl = "url('img/2 NOSOTROS.jpg')";
  }
  if (bg === "Servicios") {
    bgUrl = "url('img/LO QUE HACEMOS FINAL.jpg')";
  }
  if (bg === "Recursos") {
    bgUrl = "url('img/RECURSOS ARREGLADA.jpg')";
  }
  if (bg === "Laboratorio") {
    bgUrl = "url('img/LABORATORIO ARREGLADA.jpg')";
  }
  if (bg === "Contacto") {
    bgUrl = "url('img/CONTACTO ARREGLADA.jpg')";
  }

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "100wh" },
        height: { xs: "100%", md: "calc(100vh + 30rem)" },
        position: "relative",
        backgroundImage: bgUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "999",
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
