import React from "react";
import { Box } from "@mui/system";
// @ts-ignore
const GripContainer = ({
  children,
  spaceMid,
  isFirts,
}: {
  children: any;
  spaceMid?: boolean;
  isFirts?: boolean;
}) => {
  const space = spaceMid ? "100px" : "0";
  return (
    <Box component="section">
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: space,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GripContainer;
