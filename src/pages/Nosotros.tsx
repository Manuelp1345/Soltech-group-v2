import React from "react";
import GripContainer from "../components/grip/GripContainer";
import GripItem from "../components/grip/GripItem";
import { Button, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import ContainerCustom from "../components/ContainerCustom";
import Header from "../components/Header";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: 500,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
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

  return (
    <ContainerCustom bg="nosotros">
      <Header />
      <GripContainer isFirts>
        <GripItem></GripItem>
        <GripItem>
          <Typography
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 2,
              height: "200px",
            }}
          >
            Visión
          </Typography>
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
              Posicionarnos como una empresa pionera a nivel mundial, en el
              desarrollo de productos basados en tecnología Blockchain,
              integrando soluciones a todos los niveles que permitan mejorar la
              calidad de vida de las personas y las empresas.
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
      <GripContainer spaceMid>
        <GripItem></GripItem>
        <GripItem>
          <Typography
            sx={{ color: "white", fontWeight: "bold", marginLeft: 2 }}
          >
            Team
          </Typography>
        </GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem>
          <GripItem></GripItem>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m7.png");
              setText({
                nombre: "Jorge  Martin",
                puesto: "Chief Executive Officer",
                descripcion:
                  "Martin es británico-colombiano, tiene estudios en banca y finanzas internacionales de la CASS Business School, estudió técnicas en la Universidad de Oxford y tiene una maestría en finanzas de la London School of Economics and Political Science. Durante su carrera académica, Martin llevó a su equipo universitario a la final de IBM Business Challenge en 2006 y en 2007 y 2008 participa en el G8 asistiendo a los ministros de Economía y Defensa de Alemania y Japón. Finalista en 2008 en la competencia de negociación de futuros de fantasía de JP Morgan. En 2008 Martin es nominado para el premio Joven Europeo del Año por la Embajada Británica en Berlín y el Parlamento Europeo. Martin completó los programas de pasantías de Mercados Globales en Morgan Stanley y Goldman Sachs en Londres. Luego comenzó su carrera en el British Investment Bank Barclays Capital como analista dentro de la División de Estrategia de Inversión de Gestión de Fondos en Mercados Globales, administrando 73 subfondos y sus estrategias. Posteriormente se unió a SISU Capital International Hedge Fund en Londres, desarrollando estrategias de inversión en renta fija y variable, sectores de energía convencional y renovable, tecnología, automóvil, fusiones y adquisiciones internacionales, opciones de mercados de divisas y derivados. Martin, posteriormente inició una brillante carrera en la Bolsa de Valores de Londres, en el equipo de Mercados de Deuda Europeos durante la crisis económica europea, identificando oportunidades de Financiamiento para varios países europeos a través de Bonos Soberanos y ETFs, para inversión en infraestructura en tiempos de crisis y ansiedad bursátil. . El 25 de mayo de 2012, Martín abrió por primera vez en la historia la Bolsa de Valores de Londres para Colombia, continuando con República Dominicana y SICA el Bloque Económico Centroamericano, Panamá, Argentina y Chile. También dentro de la LSE, especializándome en Asesoramiento de Inversiones y Captación de Capital para Gobiernos y Empresas a través de IPOs and RTOs para medianas y grandes empresas tanto en el Mercado Principal como en el Mercado AIM de la LSE. Luego, se unió a la división comercial de Centrica Oil &amp; Gas, la corporación comercial multinacional de servicios de energía y gas más grande de Europa. Empresa matriz de British Gas, Centrica Hive Direct Energy, Bord Gais en la división de comercio de energía involucrada en el comercio de energía convencional y nuclear, derivados del petróleo y comercio de gas en todo el mundo. Martin es una voz respetada dentro de la Industria de Inversiones y se le puede ver a menudo en importantes cadenas de televisión, prensa en Europa y América Latina y ediciones financieras especializadas por su amplio conocimiento de Trading, Inversiones Internacionales y Transacciones Bursátiles en BBC, RT, Al Jazeera, Caracol, RCN, la W, El Espectador, El Tiempo, diario Portafolio entre otras publicaciones.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m7.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Jorge Martin</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Chief Executive Officer
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m9.png");
              setText({
                nombre: "Edgar Alexander Rosales",
                puesto: "Chief Information Officer",
                descripcion:
                  "Edgar Alexander Rosales es un Ingeniero con décadas de experiencia, incursionando desde muy joven en el campo de la docencia universitaria, impartiendo cátedras de lenguajes de programación y seguridad informática, trabajando tanto en plataformas propietarias (Microsoft), como plataformas libres (Linux), dedicando gran parte de su tiempo a desarrollar sistemas administrativos y de procesos, para el sector público y privado, luego paso a dedicarse a la gerencia de proyectos tecnológicos basados en la informática, ocupando los más altos cargos del país, utilizando sus habilidades y destrezas en el mundo de la seguridad informática para implementar políticas y estrategias que mejoraron el desempeño de todos los sistemas a su cargo, tuvo la oportunidad de dirigir proyectos con empresas internacionales como lo fueron CEIEC de China, COBRA de España, THALES de Francia y las filiales nacionales de Empresas como HP, XEROS, IBM, CISCO entro otras. En 2015, comenzó a su periodo de investigación, formación y desarrollo dentro de la tecnología blockchain, en donde ha tenido la oportunidad de dirigir diferentes equipos multidisciplinarios, en cada una de las fases que conllevan el desarrollo o la creación de una criptomoneda que pueda ser, transaccionable, auditable y segura en el mercado de cripto activos",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m9.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>
              Edgar Alexander Rosales
            </Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Chief Information Officer
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m4.png");
              setText({
                nombre: "Eli Godoy",
                puesto: "Chief Operating Officer",
                descripcion:
                  "Eli Godoy es un Ingeniero con décadas de experiencia, trabajó en las petroleras a temprana edad como Senior y Lead Programmer,diseñando sistemas y control de inventarios de crudo, dominando las plataformas de Microsoft, Novell y Sun, para luego dedicarse al área de desarrollo y automatización de estrategias de Trading antes de la caída de la burbuja inmobiliaria del 2008. Ha ejercido como CTO de múltiples empresas privadas como SIOSCA o PLASVEN, siendo experto en seguridad en Redes y CEO de sus propias firmas consultoras con clientes en el mercado regional, creando soluciones, apps y software a la medida. En 1999, diseñó y construyó el establecimiento para juegos en red grande de América del Sur, que regento por 4 años, junto a los telepuertos de control, para luego dedicarse a la automatización industrial con su firma privada Grupo Empresarial 1171, bajo la cual realizó decenas de Retrofits e instalaciones exitosas de sistemas de control, PLC, CRM y ERP de uso industrial. Tiene 12 años de experiencia en el mundo Blockchain, y ha diseñado, construido y gerenciado algunas de las minas de Cripto Activos más grandes de América, controlando la seguridad de las mismas impecablemente sin ruptura alguna por años. Ha diseñado varios proyectos de token y es consultor activo de varios proyectos Blockchain de punta.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m4.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Eli Godoy</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Chief Operating Officer
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m3.png");
              setText({
                nombre: "Ernesto Vergara",
                puesto: "Chief Information Officer",
                descripcion:
                  "Ernesto Vergara es un Ingeniero de Sistemas y Técnico Superior Universitario en Informática con 22 años de experiencia en desarrollo de software, administración, gestión y análisis de base de datos en los sectores público y privado. Como Senior ha trabajado por varios años en el sector universitario automatizando diferentes procesos de registro y control de estudiantes, así como también la automatización de procesos administrativos. Como director IT ha estado a cargo de administrar los centros de datos y los diferentes servicios como son DNS, correo, ftp, www entre otros, todos bajo software libre (Linux). Como profesor universitario en la carrera de Ingeniería en Informática impartiendo cátedras como programación, base de datos, sistemas operativos linux y tecnologías de información y comunicación. Ha desarrollado token usando Solidity y desplegando en la cadena de bloques Binance Smart Chain.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m3.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Ernesto Vergara</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Chief Information Officer
            </Typography>
          </Button>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m2.png");
              setText({
                nombre: "Eder Martello Mayorga",
                puesto:
                  "Director of Environment, Sustainability and Development",
                descripcion:
                  "Martello Mayorga, Zootecnista de nacionalidad Colombiana tiene una gran experiencia por su trabajo en el Sector Agropecuario y Minero en el país, ha estado involucrado en la producción pecuaria láctea del sector ganadero (Hato Cascajal, Hacienda la Guaira y otras) producción ganadera cárnica y doble propósito en las zonas tropicales,(Agropecuaria la Gloria, Hato Rondon, Hacienda los Micos, Hacienda Balmoral, entre otras.) experto en el desarrollo de aperos agrícolas para la preparación primaria en los sectores palmicultores, (Agropecuaria San Felipe, Aceites Manuelita, Palmeras Induariari) caña de azúcar (Azúcar Manuelita, Río Paila Castilla, Bioenergy) cacao (Bacao )y desarrollos agropecuarios en grandes extensiones (Adecuación, preparacion y siembras de más de 80.000 hectáreas) producción de especias sostenibles y deshidratados, producción sostenible y amigable con el medio ambiente; en el sector Minero (Cantera Metropolis, RP Mineros Constructores) experto en la explotación de pétreos a cielo abierto, producción y transformación de calcareos, explotación y transformación de cantos rodados.. Como un especialista en producción sostenible, Martello es muy experimentado en los sistemas de conservación ambiental, ha estado en el desarrollo de programas de Pagos Por servicios Ambientales, potencialización de empresas al ingreso de Nuevos Negocios y Mercados Verdes, Reconversiones productivas a sistemas tradicionales de productos del Alto Bosque Andino (Gobernacion del Meta) Programas de Restauración y conservación de territorios Indígenas (Comunidades Indígenas Meta y Vichada) desarrollos de productos en el sector Público y Privado, agrícola y minero en diferentes regiones del País.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m2.png" sx={{ maxHeight: 150 }} />
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
          </Button>
        </GripItem>
        <GripItem>
          <Button
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
            }}
          >
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
              <Box component="img" src="img/m1.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Alexander Vanegas</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Director Public Relations
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m8.png");
              setText({
                nombre: "Viviana Arango",
                puesto: "Director of Human Resources",
                descripcion:
                  "Viviana Arango, cuenta con una amplia experiencia en el manejo organizacional dentro del sector de la salud y privado. Su formación en las ciencias de la salud, le ha permitido implementar importantes cambios organizacionales, tanto para la selección de personal, como para el manejo de los planes de desarrollo integral para los empleados de la firma y el manejo del Bienestar del Empleado en su salud física, mental y desarrollo profesional. Viviana desarrollo gran parte de su experiencia en España, de la cual es nacional; donde trabajo implementando planes del Gobierno Español, con diferentes sectores de la población. Actualizados con una continua preparación académica, entre ellos el estudio en Sistemas Integrados de Gestión HSEQ y certificación de auditora interna. Además de haber trabajado en Europa, Viviana cuenta con experiencia implementando planes de desarrollo con varias Instituciones en Colombia, donde su experiencia y diligencia profesional son altamente valorados.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m8.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Viviana Arango</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Director of Human Resources
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m10.png");
              setText({
                nombre: "Ivihan Ixela Pereira Morett",
                puesto: "Director of Accounting And Audit",
                descripcion:
                  "Ivihan, es una profesional con décadas de experiencia en áreas como administración de empresa, contabilidad y derecho, ocupando los más altos cargos en el sector público y privado del país, participando activamente en la restructuración de empresas, el manejo del talento humano y resolución de conflictos laborales, civiles y mercantiles. En sus primeros años de ejercicio fue desempeñándose como Consultor Jurídico (abogado jefe), luego con la experiencia ganada y utilizando sus habilidades y destrezas se dedico a llevar la administración de empresas (organización, compra, ventas, impuestos, entre otros) Tuvo la oportunidad de prestar sus servicios en el área jurídica en proyectos llevados a cabo por las empresas CEIEC de China y COBRA de España. Se especializo en el desarrollo del talento humano como recurso fundamental de toda organización.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m10.png" sx={{ maxHeight: 150 }} />
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
          </Button>
        </GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m6.png");
              setText({
                nombre: "Jorge Diaz",
                puesto: "Director Public Relations",
                descripcion:
                  "Jorge Diaz estudio desarrollo empresarial e Ingeniería Industrial. Luego de su preparación académica, Jorge inicia su carrera profesional, en una importante empresa de muebles de lujo, para una clientela selecta y de gustos muy particulares; para lo cual Jorge con su experticia en diseños de software, manejaba los programas para estos diseños y satisfacer un mercado muy demandante. Seguido, Jorge se une al equipo de diseño del sistema de transporte articulado central de Bogotá, capital de Colombia - Transmilenio. Siendo este el proyecto de transporte más ambicioso del país. Igualmente, el más avanzando con mayor cantidad de usuarios y complejo del país; para lo cual Jorge con su experticia logra desarrollar una de las rutas de acceso y de pasajeros más importante de la ciudad – La ruta de las Américas. Después, inicia su carrera como empresario en el sector de los hidro-carburos como contratista en el manejo de software para el desarrollo de estudios adjuntos a exploraciones sísmicas de petroleras tanto nacionales como Internacionales. Conjuntamente con el desarrollo de software para gestión de sistemas de riesgo para Multinacionales. Actualmente y dada a su importante trayectoria, lo lleva a enfocarse en el software estadístico para desarrollar aplicaciones de apuestas deportivas, gaming y desarrollo de apps; para importantes firmas en LATAM. Seguido de esto, Jorge se especializa en este sector creando su propia empresa de redes transaccionales y desarrollo de software, utilizando el block-chain y desarrollo de aplicaciones por pedidos especiales para clientes tanto en el sector Público como Privado en LATAM y Europa.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "100%",
                border: "5px solid #2f3742",
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
              Director Public Relations
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m5.png");
              setText({
                nombre: "Benmar Salas Rivero",
                puesto: "Marketing Officers",
                descripcion:
                  "Benmar es una abogada con experiencia en el área Penal, desempeñándose cómo Analista y secretaria de Tribunales, con experiencia en manejo de expedientes y estadísticas. Se desempeño en la Gobernación como consultor Jurídico de Bienes, con lo que adquirió la experiencia en títulos supletorio de bienes inmuebles. Logro un título Técnico en administración de Empresas y se desempeñó como Jefe de Personal, con lo cual obtuvo la experiencia en Manejo de Personal. Empresaria y representante de marketing digital, Especialista en MEDIA BUYER y Diseñadora de Estrategias digitales para cualquier tipo de negocio a través de canales de Internet y herramientas online para su debido crecimiento, midiendo en tiempo real las acciones que se llevan a cabo para tener impacto en el mundo.",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m5.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Benmar Salas Rivero</Typography>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              Marketing Officers
            </Typography>
          </Button>
        </GripItem>
        <GripItem>
          <Button
            onClick={() => {
              setOpen(true);
              setImgUrl("img/m11.png");
              setText({
                nombre: "Manuel Puente",
                puesto: "Web Developer",
                descripcion:
                  "Manuel Puentes es un joven que se tituló como Técnico Superior Universitario en Informática, dedicado a la programación, específicamente al  desarrollo de aplicaciones, especializado en FrontEnd, con 4 años de experiencia en el área, ha colaborado en multiplex proyectos, tanto del sector publico como privado,  con capacidad de liderazgo y adaptable a los constantes cambios tecnológicos, trabaja muy bien equipo y bajo presión, con herramientas sólidas para la resolución de conflictos programáticos Además actualmente se encuentra cursando las ultimas materia para obtener el titulo de Ingeniero en Informática, es proactivo, autodicta, siempre con el horizonte de seguir aprendiendo, con mucha creatividad y deseos de superación",
              });
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              <Box component="img" src="img/m11.png" sx={{ maxHeight: 150 }} />
              <br />
            </Box>
            <Typography sx={{ color: "white" }}>Manuel Puente</Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
            >
              Web Developer
            </Typography>
          </Button>
        </GripItem>
        <GripItem></GripItem>
        <GripItem isLast></GripItem>
      </GripContainer>
      <GripContainer>
        <GripItem></GripItem>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="img" src={imgUrl} sx={{ maxHeight: 250 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {text.nombre}
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {text.puesto}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {text.descripcion}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </ContainerCustom>
  );
};

export default Nosotros;
