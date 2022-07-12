import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const ButtonMenu = ({
  children,
  lastBtn,
}: {
  children: string;
  lastBtn?: boolean;
}) => {
  const margin = !lastBtn ? "0" : "1rem";
  return (
    <Box sx={{ listStyle: "none" }} component="li">
      <Button
        sx={{
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "0.5rem",
          marginRight: margin,
        }}
      >
        {children}
      </Button>
    </Box>
  );
};

export default ButtonMenu;
