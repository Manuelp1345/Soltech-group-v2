import React, { useContext } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import { Language } from "../App";
import data from "../data.json";

const Vision = () => {
  // @ts-ignore
  const { language } = useContext(Language);

  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;

  return (
    <ContainerCustom bg="nosotros">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.4) 100%)",
          height: "100%",
          px: "20%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderBottom: "#2f3742 solid 1px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2.5rem",
            }}
          >
            {contenido.nosotros.titulo}
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            {contenido.nosotros.desc}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2.5rem",
            }}
          >
            {contenido.vision.titulo}
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
            }}
          >
            {contenido.vision.desc}
          </Typography>
        </Box>
      </Box>
    </ContainerCustom>
  );
};

export default Vision;
