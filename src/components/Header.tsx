import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";

const Header = () => {
  //@ts-ignore
  const { language } = useContext(Language);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1rem",
        color: "white",
        height: "100vh",
        paddingX: "10rem",
        marginBottom: "30rem",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2.5rem", md: "5rem" },
          fontWeight: "bold",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {language === "english"
          ? "We put Blockchain  technology to reach your hands"
          : "Te ponemos la Tecnologia Blockchain  al alcance de tus manos"}
      </Typography>
    </Box>
  );
};

export default Header;
