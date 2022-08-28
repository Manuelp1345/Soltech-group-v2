import React from "react";
import ContainerCustom from "../components/ContainerCustom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";
import data from "../data.json";

const Laboratorio = () => {
  // @ts-ignore
  const { language } = useContext(Language);

  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;
  return (
    <ContainerCustom bg="Laboratorio">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.7) 100%)",
          height: "100%",
          px: "20%",
          paddingBottom: "10rem",
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
          {contenido.lab.titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {contenido.lab.desc}
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
          {contenido["Soltech Cloud"].titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {contenido["Soltech Cloud"].desc}
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
          {contenido.centroDev.titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {contenido.centroDev.desc}
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
          {contenido["Soltech Group UK"].titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {contenido["Soltech Group UK"].desc}
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
          {contenido.supService.titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {contenido.supService.desc}
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
          {contenido.EcoOri.titulo}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          {contenido.EcoOri.desc}
        </Typography>
      </Box>
    </ContainerCustom>
  );
};

export default Laboratorio;
