import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonMenu = ({
  children,
  to,
  lastBtn,
}: {
  children: string;
  to: string;
  lastBtn?: boolean;
}) => {
  const margin = !lastBtn ? "0" : "1rem";
  return (
    <Box sx={{ listStyle: "none" }} component="li">
      <Link style={{ textDecoration: "none" }} to={to}>
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
      </Link>
    </Box>
  );
};

export default ButtonMenu;
