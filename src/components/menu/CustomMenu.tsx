import ButtonMenu from "./ButtonMenu";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CustomMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "0.5rem",
        position: "fixed",
        width: "100%",
        zIndex: "100",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="IMG/logo sin letras.png"
          sx={{
            width: "4rem",
            marginLeft: "1rem",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            letterSpacing: "0.5rem",
            marginLeft: "1rem",
          }}
        >
          Soltech Group
        </Typography>
      </Box>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        <ButtonMenu to="/">Home</ButtonMenu>
        <ButtonMenu to="/nosotros">Nosotros</ButtonMenu>
        <ButtonMenu to="/lo-que-hacemos">Lo que hacemos</ButtonMenu>
        <ButtonMenu to="/recursos">Recursos</ButtonMenu>
        <ButtonMenu to="/lab">Laboratorios</ButtonMenu>
        <ButtonMenu to="/contacto" lastBtn>
          Contacto
        </ButtonMenu>
      </Box>
    </Box>
  );
};

export default CustomMenu;
