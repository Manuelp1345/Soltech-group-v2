import React from "react";
import CustomMenu from "./menu/CustomMenu";
import { Box } from "@mui/system";
// @ts-ignore
const ContainerCustom = ({ children, bg }) => {
  let bgUrl = "";

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

  if (bg === "homes") {
    return (
      <Box sx={{ position: "relative" }}>
        <Box
          component="video"
          src="img/BACKGROUND_PLEXUS_INVERBET.mp4"
          autoPlay
          loop
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            padding: "0",
            margin: "0",
            zIndex: "-1",
            objectFit: "cover",
          }}
        >
          <CustomMenu />
          {children}
        </Box>
      </Box>
    );
  }
  if (bg === "home") {
    return (
      <>
        {" "}
        <Box
          component="video"
          src="img/BACKGROUND_PLEXUS_INVERBET.mp4"
          autoPlay={true}
          loop
          muted
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            padding: "0",
            margin: "0",
            zIndex: "-1",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            height: "100%",
            position: "absolute",
            zIndex: "10",
          }}
        >
          <CustomMenu />
          {children}
        </Box>
      </>
    );
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
