import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";

const Vision = () => {
  return (
    <ContainerCustom bg="nosotros">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.4) 100%)",
          height: "100%",
        }}
      >
        <GripContainer isFirts>
          <GripItem></GripItem>
          <GripItem>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                height: "200px",
              }}
            >
              Visión
            </Typography>
          </GripItem>
          <GripItem>
            <Box
              sx={{
                height: "40%",
                borderBottom: "#2f3742 solid 1px",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  marginLeft: 2,
                  position: "absolute",
                  top: "25%",
                  left: "20%",
                  width: "60%",
                }}
              >
                Posicionarnos como una empresa pionera a nivel mundial, en el
                desarrollo de productos basados en tecnología Blockchain,
                integrando soluciones a todos los niveles que permitan mejorar
                la calidad de vida de las personas y las empresas.
              </Typography>
            </Box>
          </GripItem>
          <GripItem></GripItem>
          <GripItem></GripItem>

          <GripItem isLast></GripItem>
        </GripContainer>
      </Box>
    </ContainerCustom>
  );
};

export default Vision;
