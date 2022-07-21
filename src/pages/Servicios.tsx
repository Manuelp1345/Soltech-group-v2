import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import { Typography, CardContent, Card } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import "animate.css";
import { useContext } from "react";
import { Language } from "../App";

const tenologiaBlock = (
  <>
    Desarrollamos Criptomonedas
    <span style={{ fontSize: 5, fontWeight: "bold" }}>...</span>
    <span>, Token y NFT compatibles con múltiples Exchange</span>
  </>
);

const tecnologiaBlock = (
  <>
    We develop Cryptocurrencies
    <span style={{ fontSize: 5, fontWeight: "bold" }}>...</span>
    <span>, Tokens and NFTs compatible with multiple Exchanges.</span>
  </>
);

const itInfrastruc = (
  <>
    We design and supply
    <span>...</span>
    <span>
      &nbsp;the IT infrastructure that adapts correctly to the needs of your
      company, with high scalability over time.
    </span>
  </>
);

const itInfrastruc2 = (
  <>
    Diseñamos y Suministramos
    <span>...</span>
    <span>
      &nbsp;la Infraestructura de TI que se adapte de forma correcta a las
      necesidades de tu empresa, con una alta escalabilidad en el Tiempo.
    </span>
  </>
);

const digital = (
  <>
    Intervention to stimulate
    <span>...</span>
    <span>
      &nbsp;the acceleration of the digital transformation of companies.
    </span>
  </>
);
const digital2 = (
  <>
    Intervención para estimular
    <span>...</span>
    <span>
      &nbsp;la aceleración de la transformación digital de las empresas.
    </span>
  </>
);

const seguridad = (
  <>
    We protect the Integrity
    <span>...</span>
    <span>&nbsp;and Privacy of your Company’s Data.</span>
  </>
);
const seguridad2 = (
  <>
    Protegemos la Integridad
    <span>...</span>
    <span>&nbsp;y Privacidad de la Data de tu Empresa.</span>
  </>
);

const consultoria = (
  <>
    We advise you on how
    <span>...</span>
    <span>
      &nbsp;to achieve an ICT strategy adapted to your needs and focused on
      results for your company.
    </span>
  </>
);
const consultoria2 = (
  <>
    Te asesoramos sobre
    <span>...</span>
    <span>
      &nbsp;cómo conseguir una estrategia TIC adaptada a tus necesidades y
      enfocada a resultados para tu empresa.
    </span>
  </>
);

const cloud = (
  <>
    Cloud Computing Platform Rental
    <span>...</span>
    <span>&nbsp;for Data Processing</span>
  </>
);
const cloud2 = (
  <>
    Alquiler de plataforma
    <span>...</span>
    <span>&nbsp;de Computo en la Nube para el procesamiento de Datos</span>
  </>
);

const migracion = (
  <>
    We transfer the data
    <span>...</span>
    <span>
      &nbsp;of your company from one platform to another (from one system to
      another), with the Scrapy use of Data from Any Platform (Data Mining).
    </span>
  </>
);
const migracion2 = (
  <>
    Trasladamos la Data
    <span>...</span>
    <span>
      &nbsp;de tu empresa de una plataforma a otra (de un Sistema a Otro), con
      el uso de Scrapy de Datos de Cualquier Plataforma (Minería de Datos).
    </span>
  </>
);

const app = (
  <>
    We create Applications
    <span>...</span>
    <span>&nbsp;for all types of digital electronic devices.</span>
  </>
);
const app2 = (
  <>
    Creamos Aplicaciones
    <span>...</span>
    <span>&nbsp;para todo tipo de dispositivos electrónicos digitales</span>
  </>
);

const Servicios = () => {
  // @ts-ignore
  const { language } = useContext(Language);

  return (
    <ContainerCustom bg="Servicios">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.5) 100%)",
          height: "100%",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            marginLeft: 30,
            fontSize: "2rem",
          }}
        >
          {language === "english" ? "Services" : "Servicios"}
        </Typography>
        <GripContainer isFirts>
          <GripItem>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem></GripItem>
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
                  {language === "english"
                    ? "Blockchain technologies"
                    : "Tecnologías BlockChain"}
                  <br />
                  <br />
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? tecnologiaBlock : tenologiaBlock}
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
                  {language === "english" ? (
                    <>
                      IT infrastructure
                      <br />
                    </>
                  ) : (
                    "Infraestructura de TI"
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
                  {language === "english" ? itInfrastruc : itInfrastruc2}
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
                  {language === "english" ? (
                    <>Digital Transformation</>
                  ) : (
                    <>Transformación Digital</>
                  )}

                  <br />
                  <br />
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? digital : digital2}
                </Typography>
              </CardContent>
            </Card>
          </GripItem>
          <GripItem isLast>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
        </GripContainer>
        <GripContainer>
          <GripItem>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
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
                  {language === "english" ? <>Security</> : <>Seguridad</>}

                  <br />
                  <br />
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? seguridad : seguridad2}
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
                  {language === "english" ? <>Consultancy</> : <>Consultoría</>}
                  <br />
                  <br />
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? consultoria : consultoria2}
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
                  {language === "english" ? (
                    <>Cloud Computing Services</>
                  ) : (
                    <>Cloud Computing Services</>
                  )}
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? cloud : cloud2}
                </Typography>
              </CardContent>
            </Card>
          </GripItem>

          <GripItem isLast>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
        </GripContainer>
        <GripContainer>
          <GripItem>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
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
                  {language === "english" ? (
                    <>
                      Data Migrations
                      <br />
                      <br />
                    </>
                  ) : (
                    <>Migraciones de Datos</>
                  )}
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? migracion : migracion2}
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
                  {language === "english" ? (
                    <>Application Development </>
                  ) : (
                    <>Desarrollo de aplicaciones</>
                  )}
                </Typography>
                <Typography className="textHover" variant="body2">
                  {language === "english" ? app : app2}
                </Typography>
              </CardContent>
            </Card>
          </GripItem>
          <GripItem>
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
          </GripItem>
          <GripItem isLast>
            {" "}
            <Box
              sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}
            ></Box>
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
      </Box>
    </ContainerCustom>
  );
};

export default Servicios;
