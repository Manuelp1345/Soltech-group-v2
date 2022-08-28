import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useContext } from "react";
import { Language } from "../../App";
import data from "../../data.json";

const ButtonMenu = ({
  children,
  to,
  lastBtn,
  isExpanded,
}: {
  children: string;
  to: string;
  lastBtn?: boolean;
  isExpanded?: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  // @ts-ignore
  const { language } = useContext(Language);

  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;

  const handleClick = () => {
    setOpen(!open);
  };
  const margin = !lastBtn ? "0" : "1rem";

  const path = !isExpanded ? to : "";

  return (
    <Box sx={{ listStyle: "none" }} component="li">
      <Link style={{ textDecoration: "none" }} to={path}>
        <Button
          onClick={() => isExpanded && handleClick()}
          sx={{
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            padding: "0.5rem",
            marginRight: margin,
          }}
        >
          {children}
          {isExpanded ? open ? <ExpandLess /> : <ExpandMore /> : null}
        </Button>
      </Link>
      <Collapse
        sx={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <Link style={{ textDecoration: "none" }} to="/vision">
            <ListItemButton sx={{ px: 4, fontSize: "1rem" }}>
              <ListItemText
                sx={{ color: "white" }}
                primary={language === "english" ? "Vision" : "Visión"}
              />
            </ListItemButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/nosotros">
            <ListItemButton sx={{ px: 4, fontSize: "1rem" }}>
              <ListItemText sx={{ color: "white" }} primary={contenido.team} />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </Box>
  );
};

export default ButtonMenu;
