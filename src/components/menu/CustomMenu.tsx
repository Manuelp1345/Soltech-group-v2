import ButtonMenu from "./ButtonMenu";
import { Box } from "@mui/system";
import {
  IconButton,
  Menu,
  Typography,
  Button,
  Collapse,
  List,
  ListItemButton,
} from "@mui/material";
import { Language } from "../../App";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext, useEffect, useState } from "react";
import data from "../../data.json";

const ITEM_HEIGHT = 48;

const CustomMenu = () => {
  //@ts-ignore
  const { setLanguage, language } = useContext(Language);
  const [openLanguaje, setOpenLanguaje] = useState(false);

  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickBtn = () => {
    setOpenLanguaje(!openLanguaje);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, [setLanguage]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "center" },
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
          src="img/logo.png"
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
          sx={{
            position: "relative",
          }}
        >
          <Button
            onClick={() => handleClickBtn()}
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            <Box
              component="img"
              src={`img/${language}.png`}
              sx={{
                width: language === "french" ? "3rem" : "2rem",
              }}
            />
          </Button>
          <Collapse
            sx={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.3)",
              top: 45,
              left: 0,
            }}
            in={openLanguaje}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItemButton
                sx={{
                  px: 1.5,
                  fontSize: "1rem",
                  display: language === "french" ? "none" : "block",
                }}
              >
                <Box
                  onClick={() => {
                    setLanguage("french");
                    handleClickBtn();
                    localStorage.setItem("language", "french");
                  }}
                  component="img"
                  src={"img/french.png"}
                  sx={{
                    width: "2.5rem",
                    height: 30,
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  px: 2,
                  fontSize: "1rem",
                  display: language === "english" ? "none" : "block",
                }}
              >
                <Box
                  onClick={() => {
                    setLanguage("english");
                    handleClickBtn();
                    localStorage.setItem("language", "english");
                  }}
                  component="img"
                  src={"img/english.png"}
                  sx={{
                    width: "2rem",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{
                  px: 2,
                  fontSize: "1rem",
                  display: language === "spanish" ? "none" : "block",
                }}
              >
                <Box
                  onClick={() => {
                    setLanguage("spanish");
                    localStorage.setItem("language", "spanish");
                    handleClickBtn();
                  }}
                  component="img"
                  src={"img/spanish.png"}
                  sx={{
                    width: "2rem",
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </Box>
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
          {contenido.nosotros.titulo}
        </ButtonMenu>
        <ButtonMenu to="/lo-que-hacemos">
          {contenido.loQueHacemos.titulo}
        </ButtonMenu>
        {/*         <ButtonMenu to="/recursos">Recursos</ButtonMenu> */}
        <ButtonMenu to="/lab">{contenido.lab.titulo}</ButtonMenu>
        <ButtonMenu to="/contacto" lastBtn>
          {contenido.contat}
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
          <ButtonMenu to="/nosotros">{contenido.team}</ButtonMenu>
          <ButtonMenu to="/lo-que-hacemos">
            {contenido.loQueHacemos.titulo}
          </ButtonMenu>
          {/*         <ButtonMenu to="/recursos">Recursos</ButtonMenu> */}
          <ButtonMenu to="/lab">{contenido.lab.titulo}</ButtonMenu>
          <ButtonMenu to="/contacto" lastBtn>
            {contenido.contat}
          </ButtonMenu>
        </Menu>
      </Box>
    </Box>
  );
};

export default CustomMenu;
