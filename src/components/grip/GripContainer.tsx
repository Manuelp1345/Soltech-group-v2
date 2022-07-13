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
    <Box
      component="section"
      sx={{
        marginTop: isFirts ? "-10rem" : "0",
      }}
    >
      <Box
        sx={{
          background: isFirts
            ? "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.4) 100%)"
            : "rgb(23, 32, 44)",
          display: "grid",
          gridTemplateColumns: "1.5fr 2fr 2fr 2fr 2fr 2fr ",
          borderBottom: "1px solid #2f3742",
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
