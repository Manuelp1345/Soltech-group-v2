import ButtonMenu from "./ButtonMenu";
import { Box } from "@mui/system";
import { IconButton, Menu, Typography } from "@mui/material";
import { Language } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useEffect, useState } from "react";

const ITEM_HEIGHT = 48;

const CustomMenu = () => {
  //@ts-ignore
  const { setLanguage, language } = useContext(Language);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, [setLanguage, language]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-end" },
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "0.5rem",
        position: "fixed",
        width: "100%",
        zIndex: "999",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="IMG/logo sin letras.png"
          sx={{
            display: { xs: "none", md: "block", lg: "block" },
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
        <Box
          component="img"
          src={language === "english" ? "IMG/INGLATERRA.png" : "IMG/ESPAÑA.png"}
          sx={{
            width: "2rem",
          }}
          onClick={() => {
            if (language === "english") {
              setLanguage("spanish");
              localStorage.setItem("language", "spanish");
            }
            if (language === "spanish") {
              setLanguage("english");
              localStorage.setItem("language", "english");
            }
          }}
        />
      </Box>
      <Box
        component="ul"
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        <ButtonMenu to="/">Home</ButtonMenu>
        <ButtonMenu isExpanded to="/nosotros">
          {language === "english" ? "About US" : "Nosotros"}
        </ButtonMenu>
        <ButtonMenu to="/lo-que-hacemos">
          {language === "english" ? "What We Do" : " Lo que hacemos"}
        </ButtonMenu>
        {/*         <ButtonMenu to="/recursos">Recursos</ButtonMenu> */}
        <ButtonMenu to="/lab">
          {language === "english" ? "Soltech Labs" : "Laboratorios Soltech"}
        </ButtonMenu>
        <ButtonMenu to="/contacto" lastBtn>
          {language === "english" ? "Contact" : "Contacto"}
        </ButtonMenu>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <ButtonMenu to="/">Home</ButtonMenu>
          <ButtonMenu to="/vision">
            {language === "english" ? "Vision" : "Visión"}
          </ButtonMenu>
          <ButtonMenu to="/nosotros">
            {language === "english" ? "Team" : "Team"}
          </ButtonMenu>
          <ButtonMenu to="/lo-que-hacemos">
            {language === "english" ? "What We Do" : " Lo que hacemos"}
          </ButtonMenu>
          {/*         <ButtonMenu to="/recursos">Recursos</ButtonMenu> */}
          <ButtonMenu to="/lab">
            {language === "english" ? "Soltech Labs" : "Laboratorios Soltech"}
          </ButtonMenu>
          <ButtonMenu to="/contacto" lastBtn>
            {language === "english" ? "Contact" : "Contacto"}
          </ButtonMenu>
        </Menu>
      </Box>
    </Box>
  );
};

export default CustomMenu;
