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
          <ListItemButton sx={{ pl: 3, fontSize: "1rem" }}>
            <Link style={{ textDecoration: "none" }} to="/vision">
              <ListItemText sx={{ color: "white" }} primary="Visión" />
            </Link>
          </ListItemButton>
          <ListItemButton sx={{ pl: 3, fontSize: "1rem" }}>
            <Link style={{ textDecoration: "none" }} to="/nosotros">
              <ListItemText sx={{ color: "white" }} primary="team" />
            </Link>
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  );
};

export default ButtonMenu;
