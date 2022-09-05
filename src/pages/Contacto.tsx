import React from "react";

import ContainerCustom from "../components/ContainerCustom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";
import data from "../data.json";

const Contacto = () => {
  // @ts-ignore
  const { language } = useContext(Language);
  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;
  return (
    <ContainerCustom bg="Contacto">
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
            {contenido.contat}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2rem",
            }}
          >
            {language === "english"
              ? "England"
              : language === "french"
              ? "Angleterre"
              : "Inglaterra"}
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{}}>Mayfair Berkeley Square,&nbsp;</span>
            Berkeley Square House, 2nd Floor Berkeley Square, London, W1J6BD,
            GBR
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {language === "english" ? (
                <>Phone:&nbsp;</>
              ) : language === "french" ? (
                <>téléphoner:&nbsp;</>
              ) : (
                <>Telefono:&nbsp;</>
              )}
            </span>
            +44 7939 980432
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              <>Email:&nbsp;</>
            </span>
            admin@soltechgr.com
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2rem",
            }}
          >
            {language === "english"
              ? "Colombia ( development Center )"
              : language === "french"
              ? "Colombia ( centre de développement )"
              : "Colombia ( centro de desarrollo )"}
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            Carrera 40 5A 271 Sur Torre 2-204 Canaguay/Amarilo Villavicencio,
            Meta, Colombia
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {language === "english" ? (
                <>Phone:&nbsp;</>
              ) : language === "french" ? (
                <>téléphoner:&nbsp;</>
              ) : (
                <>Telefono:&nbsp;</>
              )}
            </span>
            +57 320 3674089
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              <>Email:&nbsp;</>
            </span>
            admin@soltechgroup.net
          </Typography>
        </Box>
      </Box>
    </ContainerCustom>
  );
};

export default Contacto;
