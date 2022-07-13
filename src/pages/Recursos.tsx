import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import ContainerCustom from "../components/ContainerCustom";
import Header from "../components/Header";
import { Box } from "@mui/system";

const Recursos = () => {
  return (
    <ContainerCustom bg="Recursos">
      <Header />
      <GripContainer isFirts>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
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
      <GripContainer spaceMid>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
    </ContainerCustom>
  );
};

export default Recursos;
