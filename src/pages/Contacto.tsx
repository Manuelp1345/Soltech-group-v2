import React from "react";

import ContainerCustom from "../components/ContainerCustom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";

const Contacto = () => {
  // @ts-ignore
  const { language } = useContext(Language);
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
            {language === "english" ? "Contacts" : "Contactos"}
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
              Mayfair Berkeley Square&nbsp;
            </span>
            Berkeley Square Berkeley Square House, 2nd Floor Berkeley Square,
            London, W1J6BD, GBR
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Colombia&nbsp;</span>
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
              ) : (
                <>Telefono:&nbsp;</>
              )}
            </span>
            +44 7939 980432 (UK) &nbsp;/&nbsp; +57 320-8223709 (Colombia)
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
              {language === "english" ? <>Email:&nbsp;</> : <>Correo:&nbsp;</>}
            </span>
            admin@soltechgr.com &nbsp;/&nbsp; admin@soltechgroup.net
          </Typography>
        </Box>
      </Box>
    </ContainerCustom>
  );
};

export default Contacto;
