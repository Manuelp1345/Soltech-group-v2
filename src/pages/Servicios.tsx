import { Typography, CardContent, Card } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import "animate.css";
import { useContext } from "react";
import { Language } from "../App";
import data from "../data.json";

const Servicios = () => {
  // @ts-ignore
  const { language } = useContext(Language);
  let contenido = data.inglish;

  if (language === "english") contenido = data.inglish;
  if (language === "spanish") contenido = data.spanish;
  if (language === "french") contenido = data.french;

  return (
    <ContainerCustom bg="Servicios">
      <Box
        sx={{
          paddingTop: { xs: "10rem", md: "0rem" },

          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.5) 100%)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", md: "center" },
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {language === "english" || language === "french"
            ? "Services"
            : "Servicios"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "center" },
            alignItems: { xs: "center", md: "center" },
          }}
        >
          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/blockchain.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {contenido.loQueHacemos.desc.tecBG.titulo}
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.tecBG.desc}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/infraestrucutra-ti.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {language === "english" ? (
                  <>
                    {contenido.loQueHacemos.desc.iTI.titulo}
                    <br />
                  </>
                ) : (
                  <>
                    {contenido.loQueHacemos.desc.iTI.titulo}
                    <br />
                  </>
                )}

                <br />
                <br />
              </Typography>
              <Typography
                className="textHover"
                sx={{
                  width: "200px",
                  transition: "all 0.3s ease-in-out",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                variant="body2"
              >
                {contenido.loQueHacemos.desc.iTI.desc}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/transformacion-digital.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {contenido.loQueHacemos.desc.tG.titulo}

                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.tG.desc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "center" },
            alignItems: { xs: "center", md: "center" },
          }}
        >
          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/seguridad.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {contenido.loQueHacemos.desc.seguridad.titulo}

                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.seguridad.desc}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/consultoria.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {contenido.loQueHacemos.desc.consultoria.titulo}
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.consultoria.desc}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/cloud.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {language === "english" ? (
                  <>Cloud Computing Services</>
                ) : (
                  <>Cloud Computing Services</>
                )}
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.cCS.desc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "center" },
            alignItems: { xs: "center", md: "center" },
          }}
        >
          <Card
            className="card"
            sx={{
              width: "250px",

              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/migracion.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {language === "english" ? (
                  <>
                    {contenido.loQueHacemos.desc.migracionDatos.titulo}
                    <br />
                    <br />
                  </>
                ) : (
                  <>{contenido.loQueHacemos.desc.migracionDatos.titulo}</>
                )}
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.migracionDatos.desc}
              </Typography>
            </CardContent>
          </Card>

          <Card
            className="card"
            sx={{
              width: "250px",
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{ color: "white", width: "35%", marginTop: "1rem" }}
                component="img"
                src="img/tablet-y-movil.svg"
              />
              <Typography textAlign="center" variant="h5" component="div">
                {language === "english" ? (
                  <>{contenido.loQueHacemos.desc.devApps.titulo} </>
                ) : (
                  <>{contenido.loQueHacemos.desc.devApps.titulo}</>
                )}
              </Typography>
              <Typography className="textHover" variant="body2">
                {contenido.loQueHacemos.desc.devApps.desc}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ContainerCustom>
  );
};

export default Servicios;
