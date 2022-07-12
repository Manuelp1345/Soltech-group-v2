import React from "react";
import { Box } from "@mui/system";

const GripItem = ({
  children,
  isLast,
}: {
  children?: any;
  isLast?: boolean;
}) => {
  const margin = !isLast ? "#2f3742 solid 1px" : "none";
  return (
    <Box
      sx={{
        borderRight: margin,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default GripItem;
