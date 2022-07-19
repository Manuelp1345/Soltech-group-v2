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
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        {language === "english"
          ? "We put blockchange technology to reach your hands"
          : "Te ponemos la Tecnologia Blockchange al alcance de tus manos"}
      </Typography>
    </Box>
  );
};

export default Header;
