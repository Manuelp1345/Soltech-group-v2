import React, { useContext } from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import { Language } from "../App";

const nosotros = `
Somos un equipo integral y multidisciplinario con capacidad de crear
soluciones innovadoras, adaptadas a las necesidades de nuestros
clientes, ofreciendo productos de calidad con el mejor seguimiento
postventa, garantizando la excelencia en todos nuestros servicios,
generando satisfacción y confianza, tenemos como objetivo el
crecimiento sostenido de la empresa, la rentabilidad y el desarrollo
profesional de nuestros colaboradores.
`;

const aboutUs = `
We are a comprehensive and multidisciplinary team with the ability to create innovative
solutions, adapted to the needs of our customers, offering high quality products with the best
after-sales follow-up, guaranteeing excellence in all our services, generating satisfaction and
confidence, we aim at the sustained growth of the company, the profitability and the
professional development of our collaborators.

`;

const vision = `
Posicionarnos como una empresa pionera a nivel mundial, en el desarrollo de productos
basados en tecnología Blockchain, integrando soluciones a todos los niveles que permitan
mejorar la calidad de vida de las personas y las empresas.

`;

const vision2 = `
Position ourselves as a pioneer company worldwide, in the development of products based
on Blockchain technology, integrating solutions at all levels that allow improving the quality
of life of people and companies.

`;

const Vision = () => {
  // @ts-ignore
  const { language } = useContext(Language);

  return (
    <ContainerCustom bg="nosotros">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.4) 100%)",
          height: "100%",
          px: "20%",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderBottom: "#2f3742 solid 1px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2.5rem",
            }}
          >
            {language === "english" ? "About US" : "Nosotros"}
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
              marginBottom: "1.5rem",
            }}
          >
            {language === "english" ? aboutUs : nosotros}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              marginBottom: "1rem",
              fontSize: "2.5rem",
            }}
          >
            Visión
          </Typography>
          <Typography
            sx={{
              color: "white",
              marginLeft: 2,
              width: "100%",
            }}
          >
            {language === "english" ? vision2 : vision}
          </Typography>
        </Box>
      </Box>
    </ContainerCustom>
  );
};

export default Vision;
