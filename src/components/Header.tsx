import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1rem",
        color: "white",
        height: "100vh",
        paddingX: "10rem",
        marginBottom: "30rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "5rem",
          fontWeight: "bold",
        }}
      >
        Ideas Creativas e Innovadoras
      </Typography>
      <Typography sx={{ textAlign: "right", fontSize: "1.5rem" }}>
        "Ninguno de nosotros es tan bueno como todos nosotros juntos."
        <Box>RAY KROC</Box>
      </Typography>
    </Box>
  );
};

export default Header;
