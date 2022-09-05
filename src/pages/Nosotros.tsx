import React from "react";
import { Button, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import data from "../data.json";
import perfiles from "../perfiles.json";
import { Language } from "../App";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 550, md: "70%" },
  height: { xs: "100%", md: 500 },
  bgcolor: "white",
  boxShadow: 24,
  p: { sx: 2, md: 4 },
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll",
};

const Nosotros = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [text, setText] = React.useState({
    nombre: "",
    puesto: "",
    descripcion: "",
  });
  const [imgUrl, setImgUrl] = React.useState("");
  // @ts-ignore
  const { language } = useContext(Language);

  let contenido = data.inglish;
  let perfil = perfiles.inglish;

  if (language === "english") {
    contenido = data.inglish;
    perfil = perfiles.inglish;
  }
  if (language === "spanish") {
    contenido = data.spanish;
    perfil = perfiles.spanish;
  }
  if (language === "french") {
    contenido = data.french;
    perfil = perfiles.french;
  }

  return (
    <ContainerCustom bg="nosotros">
      <Box
        sx={{
          paddingTop: { xs: "10rem", md: "0rem" },
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.4) 100%)",
          height: "100%",
          px: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "center" },
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              fontSize: "2.5rem",
            }}
          >
            {contenido.team}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m7.png");
              setText({
                nombre: "Jorge  Martin",
                puesto: perfil.jorgeMartin.title,
                descripcion: perfil.jorgeMartin.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m7.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Jorge Martin</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.jorgeMartin.title}
            </Typography>
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m9.png");
              setText({
                nombre: "Edgar Alexander Rosales",
                puesto: perfil.edgarRosales.title,
                descripcion: perfil.edgarRosales.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m9.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>
              Edgar Alexander Rosales
            </Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.edgarRosales.title}
            </Typography>
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m4.png");
              setText({
                nombre: "Eli Godoy",
                puesto: perfil.eliGodoy.title,
                descripcion: perfil.eliGodoy.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m4.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Eli Godoy</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.eliGodoy.title}
            </Typography>
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m3.png");
              setText({
                nombre: "Ernesto Vergara",
                puesto: perfil.ernestoVergara.title,
                descripcion: perfil.ernestoVergara.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m3.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Ernesto Vergara</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.ernestoVergara.title}
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m2.png");
              setText({
                nombre: "Eder Martello Mayorga",
                puesto: perfil.ederMayorga.title,
                descripcion: perfil.ederMayorga.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m2.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>
              Eder Martello Mayorga{" "}
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              {perfil.ederMayorga.title}
            </Typography>
          </Button>

          {/*           <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m1.png");
              setText({
                nombre: "Alexander Vanegas",
                puesto: "Director Public Relations",
                descripcion:
                  "Alexander Vanegas es un Empresario y Constructor, Administrador de Empresas en su profesión, Gerencio Empresas en el Sector Palmicultor como; Ganapalma, Palma-Ariari, y Palmeras La Bendición, Contratista en el sector agroindustrial con empresas como ASD Costa Rica, Agroindustrial San Mateo, Agroproyectos Sierra, De la mano de Agroproyectos San Diego actualmente desarrolla un Cultivo de Palma Africana el Municipio de San Carlos de Guaroa Agroindustria de más de 4.000 hectáreas y proyección a ampliar sus cultivos y entrar en procesos de extracción y Oleoquimica, Constructor por más de 15 años en el mercado inmobiliario con proyectos propios y asistidos como Amarilo en la ciudad de Villavicencio.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m1.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Alexander Vanegas</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Director Public Relations
            </Typography>
          </Button> */}

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m8.png");
              setText({
                nombre: "Viviana Arango",
                puesto: perfil.vivianaArango.title,
                descripcion: perfil.vivianaArango.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m8.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Viviana Arango</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.vivianaArango.title}
            </Typography>
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m10.png");
              setText({
                nombre: "Ivihan Ixela Pereira Morett",
                puesto: perfil.ivihanPereira.title,
                descripcion: perfil.ivihanPereira.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m10.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>
              Ivihan Ixela Pereira Morett
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              {perfil.ivihanPereira.title}
            </Typography>
          </Button>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m6.png");
              setText({
                nombre: "Jorge Diaz",
                puesto: perfil.jorgeDiaz.title,
                descripcion: perfil.jorgeDiaz.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box component="img" src="img/m6.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Jorge Diaz</Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              {perfil.jorgeDiaz.title}
            </Typography>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m5.png");
              setText({
                nombre: "Benmar Salas Rivero",
                puesto: perfil.benmarSalas.title,
                descripcion: perfil.benmarSalas.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m5.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Benmar Salas Rivero</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              {perfil.benmarSalas.title}
            </Typography>
          </Button>

          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m11.png");
              setText({
                nombre: "Manuel Puente",
                puesto: perfil.manuelPuente.title,
                descripcion: perfil.manuelPuente.desc,
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "250px",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box component="img" src="img/m11.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Manuel Puente</Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              {perfil.manuelPuente.title}
            </Typography>
          </Button>
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              component="img"
              src={imgUrl}
              sx={{
                maxHeight: { xs: 150, md: 250 },
                pt: { xs: 10, md: 0 },
                mt: { xs: 10, md: 0 },
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column" },
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                width: { xs: "100%", md: "auto" },
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {text.nombre}
              </Typography>
              <Typography
                textAlign={"center"}
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontSize={18}
              >
                {text.puesto.split(",")[0]}
                <br />
                {text.puesto.split(",")[1]}
              </Typography>
              <Typography
                width={"50%"}
                id="modal-modal-description"
                sx={{ width: { xs: "50%", md: "100%" }, py: 2 }}
              >
                {text.descripcion}
              </Typography>
              <Button
                sx={{ display: { xs: "block", md: "none" } }}
                onClick={handleClose}
                variant="text"
              >
                <CloseIcon />
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </ContainerCustom>
  );
};

export default Nosotros;
