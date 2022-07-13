import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import { Typography, CardContent, Card } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import Header from "../components/Header";

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
    </ContainerCustom>
  );
};

export default Servicios;
