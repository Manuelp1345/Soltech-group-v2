import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";
import data from "../data.json";

const Header = () => {
  //@ts-ignore
  const { language } = useContext(Language);

  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;

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
        {contenido.home}
      </Typography>
    </Box>
  );
};

export default Header;
