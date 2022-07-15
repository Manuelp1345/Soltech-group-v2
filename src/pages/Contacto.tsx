import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import ContainerCustom from "../components/ContainerCustom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Contacto = () => {
  return (
    <ContainerCustom bg="Contacto">
      <Box sx={{ paddingTop: "10rem" }}>
        <GripContainer isFirts>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem isLast></GripItem>
        </GripContainer>
        <GripContainer>
          <GripItem></GripItem>
          <GripItem>
            <Box sx={{ height: "250px" }}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 2,
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Contactos
              </Typography>
            </Box>
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
                <span style={{ fontWeight: "bold" }}>
                  Mayfair Berkeley Square&nbsp;
                </span>
                Berkeley Square Berkeley Square House, 2nd Floor Berkeley
                Square, London, W1J6BD, GBR
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  marginLeft: 2,
                  position: "absolute",
                  top: "50%",
                  left: "20%",
                  width: "60%",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Telefono:&nbsp;</span>
                +44 7939 980432
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  marginLeft: 2,
                  position: "absolute",
                  top: "75%",
                  left: "20%",
                  width: "60%",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Correo:&nbsp;</span>
                admin@soltechgr.com
              </Typography>
            </Box>
          </GripItem>
          <GripItem></GripItem>
          <GripItem></GripItem>
          <GripItem isLast></GripItem>
        </GripContainer>
        <GripContainer spaceMid>
          <GripItem></GripItem>
          <GripItem></GripItem>
          <GripItem></GripItem>
          <GripItem></GripItem>
          <GripItem></GripItem>
          <GripItem isLast></GripItem>
        </GripContainer>
      </Box>
    </ContainerCustom>
  );
};

export default Contacto;
