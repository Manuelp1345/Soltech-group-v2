import ContainerCustom from "./components/ContainerCustom";
import Header from "./components/Header";
import GripContainer from "./components/grip/GripContainer";
import GripItem from "./components/grip/GripItem";
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Height } from "@mui/icons-material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function App() {
  return (
    <ContainerCustom>
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
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Infraestructura de TI
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Diseñamos y Suministramos la Infraestructura de TI que se adapte
                de forma correcta a las necesidades de tu empresa, con una alta
                escalabilidad en el Tiempo.
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Transformación Digital
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Intervención para estimular la aceleración de la transformación
                digital de las empresas.
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          {" "}
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Seguridad
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Protegemos la Integridad y Privacidad de la Data de tu Empresa.
              </Typography>
            </CardContent>
          </Card>
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
      <GripContainer>
        <GripItem>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Consultoría
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Te asesoramos sobre cómo conseguir una estrategia TIC adaptada a
                tus necesidades y enfocada a resultados para tu empresa.
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Cloud Computing Services
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Alquiler de plataforma de Computo en la Nube para el
                procesamiento de Datos
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          {" "}
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Migraciones de Datos
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Trasladamos la Data de tu empresa de una plataforma a otra (de
                un Sistema a Otro), con el uso de Scrapy de Datos de Cualquier
                Plataforma (Minería de Datos).
              </Typography>
            </CardContent>
          </Card>
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
      <GripContainer>
        <GripItem>
          {" "}
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Desarrollo de aplicaciones (Móviles y de Escritorio)
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Creamos Aplicaciones para todo tipo de dispositivos electrónicos
                digitales
              </Typography>
            </CardContent>
          </Card>
        </GripItem>
        <GripItem>
          <Card
            sx={{
              minHeight: "150px",
              height: "250px",
              backgroundColor: "rgba(0,0,0,0.1)",
              color: "white",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                Tecnologías BlockChain
              </Typography>
              <Box component="img" src="" />
              <Typography variant="body2">
                Desarrollamos Criptomonedas, Token y NFT compatibles con
                múltiples Exchange
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
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginLeft: 2 }}
          >
            Nosotros
          </Typography>
        </GripItem>
        <GripItem>
          <Typography
            sx={{ color: "white", fontWeight: "normal", marginLeft: 2 }}
          >
            Vision:
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "normal", marginLeft: 2 }}
          >
            Posicionarnos como una empresa pionera a nivel mundial, en el
            desarrollo de productos basados en tecnología Blockchain, integrando
            soluciones a todos los niveles que permitan mejorar la calidad de
            vida de las personas y las empresas.
          </Typography>
        </GripItem>
        <GripItem></GripItem>
        <GripItem>
          {" "}
          <Typography
            sx={{ color: "white", fontWeight: "normal", marginLeft: 2 }}
          >
            Mision:
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "normal", marginLeft: 2 }}
          >
            Posicionarnos como una empresa pionera a nivel mundial, en el
            desarrollo de productos basados en tecnología Blockchain, integrando
            soluciones a todos los niveles que permitan mejorar la calidad de
            vida de las personas y las empresas.
          </Typography>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer spaceMid>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          {" "}
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginLeft: 2 }}
          >
            Team
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m7.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Jorge Martin</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Chief Executive Officer
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m9.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>
            Edgar Alexander Rosales
          </Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Chief Information Officer
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m4.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Eli Godoy</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Chief Operating Officer
          </Typography>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m3.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Ernesto Vergara</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Chief Information Officer
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m2.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>
            Eder Martello Mayorga{" "}
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Director of Environment, Sustainability and Development
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m1.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Alexander Vanegas</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Director Public Relations
          </Typography>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m8.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Viviana Arango</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Director of Human Resources
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m10.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>
            Ivihan Ixela Pereira Morett
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Director of Accounting And Audit
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m6.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Jorge Diaz</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Director Public Relations
          </Typography>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m5.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Benmar Salas Rivero</Typography>
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            Marketing Officers
          </Typography>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              borderRadius: "100%",
              border: "5px solid #2f3742",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="img" src="img/m11.png" sx={{ maxHeight: 200 }} />
            <br />
          </Box>
          <Typography sx={{ color: "white" }}>Manuel Puente</Typography>
          <Typography
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            Web Developers
          </Typography>
        </GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
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
}

export default App;
