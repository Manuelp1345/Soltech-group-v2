import React from "react";
import { Box } from "@mui/system";

const GripItem = ({
  children,
  isLast,
}: {
  children?: any;
  isLast?: boolean;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
      }}
    >
      {children}
    </Box>
  );
};

export default GripItem;
