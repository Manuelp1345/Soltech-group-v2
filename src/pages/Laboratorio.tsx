import React from "react";
import ContainerCustom from "../components/ContainerCustom";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Language } from "../App";

const Laboratorio = () => {
  // @ts-ignore
  const { language } = useContext(Language);
  return (
    <ContainerCustom bg="Laboratorio">
      <Box
        sx={{
          paddingTop: "10rem",
          background:
            "linear-gradient(0deg, rgba(23,32,44,1) 3%, rgba(23,32,44,0.7) 100%)",
          height: "100%",
          px: "20%",
          paddingBottom: "10rem",
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
          {language === "english" ? "Soltech Labs" : "Laboratorios Soltech"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {language === "english" ? (
            <>
              We have state-of-the-art technological facilities located in
              strategic locations in Latin America, where the costs of
              electricity, human resources and the Internet give us competitive
              advantages at the corporate level. Our research and development
              laboratories are equipped with the latest equipment and implement
              the latest technology, we go hand in hand with HP, Microsoft,
              VMWARE and other strategic partners to create robust, safe and
              reliable products with high quality standards. We have teams of
              specialist engineers permanently, always ready to act in any
              circumstance.
            </>
          ) : (
            <>
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
            </>
          )}
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
          {language === "english" ? "Soltech Cloud" : "Soltech Cloud"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {language === "english" ? (
            <>
              Our three data centers have the best access to international fiber
              optic backbones in several countries in the Americas, in
              conjunction with the latest Cisco, Oracle, Lenovo and HP dedicated
              servers, to create redundancy and 24/7 access to services when
              needed. necessary.
            </>
          ) : (
            <>
              Nuestros tres centros de datos poseen los mejores accesos a
              troncales internacionales de fibra óptica en varios países de
              América, en conjunción con lo último en servidores dedicados
              Cisco, Oracle, Lenovo y HP, para crear redundancia y acceso 24/7 a
              los servicios cuando es necesario.
            </>
          )}
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
          {language === "english"
            ? "Soltech Villavicencio Permanent Development Center"
            : "Soltech Villavicencio Centro de Desarrollo Permanente"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {language === "english" ? (
            <>
              We have facilities in the heart of Colombia, suitable for the
              permanence of our staff 24/7 during the execution phases of our
              projects, so we can offer solutions in record time, our developers
              have the facility of having the best teams, with the best rest and
              overnight areas to never be separated from the development cycles
              of our products, thus allowing us to permanently integrate
              technology with the new ideas and features necessary to achieve
              the highest quality standards.
            </>
          ) : (
            <>
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
            </>
          )}
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
          {language === "english" ? "Soltech Group UK" : "Soltech Group UK"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {language === "english" ? (
            <>
              We have a London Service and Support management office in Europe
              to be closer to our customers and provide the best service.
            </>
          ) : (
            <>
              Poseemos una oficina gerencial de Atención y Soporte Londres, en
              Europa para estar más cerca de nuestros clientes y dar el mejor
              servicio.
            </>
          )}
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
          {language === "english"
            ? "Soltech Support Service"
            : "Soltech Support Service"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "1.5rem",
          }}
        >
          {language === "english" ? (
            <>
              Our technical support and repair workshops allow our staff of
              permanent engineers to provide service to our clients, to our own
              facilities, giving us autonomy when responding to eventual
              unexpected failures or risk situations. We solve problems with our
              own teams of specialized technicians, in addition to our technical
              support department, which can be mobilized to any part of the
              planet in record time to solve problems for our customers.
            </>
          ) : (
            <>
              Nuestros talleres de soporte técnico y reparaciones permiten a
              nuestro staff de ingenieros permanentes dar servicio a nuestros
              clientes, a nuestras propias instalaciones, brindándonos autonomía
              al momento de responder a fallas eventuales inesperadas o
              situaciones de riesgo. Solucionamos problemas con nuestros propios
              equipos de técnicos especializados, además nuestro departamento de
              soporte técnico, se puede movilizar a cualquier parte del planeta
              en tiempo récord para solucionar los problemas a nuestros
              clientes.
            </>
          )}
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
          {language === "english"
            ? "EcoOrinoquia Ethereum and Cryptocurrency Mining Center"
            : "EcoOrinoquia Centro de Minería de Ethereum y Criptomonedas"}
        </Typography>
        <Typography
          sx={{
            color: "white",
            marginLeft: 2,
            width: "100%",
            marginBottom: "5rem",
          }}
        >
          {language === "english" ? (
            <>
              EcoOrinoquia is Soltech’s flagship mining facility located in
              Meta. In its primary phase, EcoOrinoquia is under construction and
              is expected to be completed by the end of the second quarter of
              2022. In its initial phase, it will incorporate sustainable mining
              based on ecological and sustainable energies such as solar panels.
              This mine allows us to give our clients examples of how to access
              cryptocurrency mining technology and monetize their investments in
              the short and medium term.
            </>
          ) : (
            <>
              EcoOrinoquia es la instalación minera insignia de Soltech ubicada
              en el Meta. En su Fase primaria EcoOrinoquia está en construcción
              y se espera que esté completada a finales del segundo trimestre de
              2022. En su fase inicial incorporara minería sustentable basada en
              energías ecológicas y sustentables como paneles solares. Esta mina
              nos permite dar ejemplos a nuestros clientes de como acceder a la
              tecnología de minería de criptomonedas y monetizar sus inversiones
              a corto y mediano plazo.
            </>
          )}
        </Typography>
      </Box>
    </ContainerCustom>
  );
};

export default Laboratorio;
