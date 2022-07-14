import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import { Typography, CardContent, Card } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import Header from "../components/Header";
import "animate.css";

const Servicios = () => {
  return (
    <ContainerCustom bg="Servicios">
      <Header />
      <GripContainer isFirts>
        <GripItem>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginLeft: 2 }}
          >
            Servicios
          </Typography>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Tecnologías BlockChain
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                Desarrollamos Criptomonedas
                <span style={{ fontSize: 5, fontWeight: "bold" }}>...</span>
                <span>, Token y NFT compatibles con múltiples Exchange</span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Infraestructura de TI
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
                Diseñamos y Suministramos
                <span>...</span>
                <span>
                  &nbsp;la Infraestructura de TI que se adapte de forma correcta
                  a las necesidades de tu empresa, con una alta escalabilidad en
                  el Tiempo.
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Transformación Digital
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                Intervención para estimular
                <span>...</span>
                <span>
                  &nbsp;la aceleración de la transformación digital de las
                  empresas.
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem isLast>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          {" "}
          <Card
            className="card"
            sx={{
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
                Seguridad
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                Protegemos la Integridad
                <span>...</span>
                <span>&nbsp;y Privacidad de la Data de tu Empresa.</span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Consultoría
                <br />
                <br />
              </Typography>
              <Typography className="textHover" variant="body2">
                Te asesoramos sobre
                <span>...</span>
                <span>
                  &nbsp;cómo conseguir una estrategia TIC adaptada a tus
                  necesidades y enfocada a resultados para tu empresa.
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Cloud Computing Services
              </Typography>
              <Typography className="textHover" variant="body2">
                Alquiler de plataforma
                <span>...</span>
                <span>
                  &nbsp;de Computo en la Nube para el procesamiento de Datos
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>

        <GripItem isLast>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          {" "}
          <Card
            className="card"
            sx={{
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
                Migraciones de Datos
              </Typography>
              <Typography className="textHover" variant="body2">
                Trasladamos la Data
                <span>...</span>
                <span>
                  &nbsp;de tu empresa de una plataforma a otra (de un Sistema a
                  Otro), con el uso de Scrapy de Datos de Cualquier Plataforma
                  (Minería de Datos).
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            className="card"
            sx={{
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
                Desarrollo de aplicaciones
              </Typography>
              <Typography className="textHover" variant="body2">
                Creamos Aplicaciones
                <span>...</span>
                <span>
                  &nbsp;para todo tipo de dispositivos electrónicos digitales
                </span>
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem isLast>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
      </GripContainer>
      <GripContainer spaceMid>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
    </ContainerCustom>
  );
};

export default Servicios;
