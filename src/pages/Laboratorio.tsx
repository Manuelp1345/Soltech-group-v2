import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import ContainerCustom from "../components/ContainerCustom";
import Header from "../components/Header";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Laboratorio = () => {
  return (
    <ContainerCustom bg="Laboratorio">
      <Header />
      <GripContainer isFirts>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Laboratorios
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "25%",
                left: "20%",
                width: "60%",
              }}
            >
              Tenemos instalaciones de vanguardia tecnológica ubicadas en sitios
              estratégicos de América Latina, donde los costos de luz, recursos
              humanos e internet nos dan ventajas competitivas a nivel
              corporativo. Nuestros laboratorios de investigación y desarrollo
              están dotados de los equipos más recientes e implementan lo último
              en tecnología, vamos de la mano con HP, Microsoft, VMWARE y otros
              socios estratégicos para crear productos robustos, seguros y
              confiables con altos estándares de calidad. Tenemos equipos de
              Ingenieros especialistas de forma permanente, siempre listos para
              la accionar en cualquier circunstancia.
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
        </GripItem>
        <GripItem>
          <Box sx={{ height: "40%", borderBottom: "#2f3742 solid 1px" }}></Box>
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
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Soltech Cloud
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "25%",
                left: "20%",
                width: "60%",
              }}
            >
              Nuestros tres centros de datos poseen los mejores accesos a
              troncales internacionales de fibra óptica en varios países de
              América, en conjunción con lo último en servidores dedicados
              Cisco, Oracle, Lenovo y HP, para crear redundancia y acceso 24/7 a
              los servicios cuando es necesario.
            </Typography>
          </Box>
        </GripItem>
        <GripItem></GripItem>
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
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Soltech Villavicencio Centro de Desarrollo Permanente
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "30%",
                left: "20%",
                width: "60%",
              }}
            >
              Poseemos instalaciones en el corazón de Colombia, adecuadas para
              la permanencia de nuestro personal 24/7 durante las fases de
              ejecución de nuestros proyectos, por lo que podemos ofrecer
              soluciones en tiempo récords, nuestros desarrolladores tienen la
              facilidad de tener los mejores equipos, con mejores áreas de
              descanso y pernocta para no separarse nunca de los ciclos de
              desarrollo de nuestros productos, permitiendo de esta forma,
              integrar permanentemente la tecnología, con la nuevas ideas y
              características necesarias para alcanzar los más altos estándares
              de calidad.
            </Typography>
          </Box>
        </GripItem>
        <GripItem></GripItem>
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
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Soltech Group UK
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "30%",
                left: "20%",
                width: "60%",
              }}
            >
              Poseemos una oficina gerencial de Atención y Soporte Londres, en
              Europa para estar más cerca de nuestros clientes y dar el mejor
              servicio.
            </Typography>
          </Box>
        </GripItem>
        <GripItem></GripItem>
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
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Soltech Support Service
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "30%",
                left: "20%",
                width: "60%",
              }}
            >
              Nuestros talleres de soporte técnico y reparaciones permiten a
              nuestro stack de ingenieros permanentes dar servicio a nuestros
              clientes, a nuestras propias instalaciones, brindándonos autonomía
              al momento de responder a fallas eventuales inesperadas o
              situaciones de riesgo. Solucionamos problemas con nuestros propios
              equipos de técnicos especializados, además nuestro departamento de
              soporte técnico, se puede movilizar a cualquier parte del planeta
              en tiempo récord para solucionar los problemas a nuestros
              clientes.
            </Typography>
          </Box>
        </GripItem>
        <GripItem></GripItem>
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
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Box sx={{ height: "250px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 2,
                marginTop: "1rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Eccorinoquia Centro de Minería de Ethereum y Criptomonedas
            </Typography>
          </Box>
        </GripItem>
        <GripItem>
          <Box
            sx={{
              height: "40%",
              borderBottom: "#2f3742 solid 1px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                marginLeft: 2,
                position: "absolute",
                top: "40%",
                left: "20%",
                width: "60%",
              }}
            >
              Eccorinoquia es la instalación minera insignia de Soltech ubicada
              en el Meta. En su Fase primaria Ecoorinoquia está en construcción
              y se espera que esté completada a finales del segundo trimestre de
              2022. En su fase inicial incorporara minería sustentable basada en
              energías ecológicas y sustentables como paneles solares. Esta mina
              nos permite dar ejemplos a nuestros clientes de como acceder a la
              tecnología de minería de criptomonedas y monetizar sus inversiones
              a corto y mediano plazo.
            </Typography>
          </Box>
        </GripItem>
        <GripItem></GripItem>
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
};

export default Laboratorio;
