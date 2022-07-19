import ButtonMenu from "./ButtonMenu";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Language } from "../../App";
import { useContext, useEffect } from "react";

const CustomMenu = () => {
  //@ts-ignore
  const { setLanguage, language } = useContext(Language);

  useEffect(() => {
    if (localStorage.getItem("language")) {
      setLanguage(localStorage.getItem("language"));
    }
  }, [setLanguage, language]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "0.5rem",
        position: "fixed",
        width: "100%",
        zIndex: "999",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="IMG/logo sin letras.png"
          sx={{
            width: "4rem",
            marginLeft: "1rem",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontSize: "1.3rem",
            fontWeight: "bold",
            letterSpacing: "0.5rem",
            marginLeft: "1rem",
          }}
        >
          Soltech Group
        </Typography>
        <Formik initialValues={{ language: "" }} onSubmit={() => {}}>
          {({ setFieldValue }) => (
            <Form>
              <Field
                value={language}
                name="language"
                as="select"
                //@ts-ignore
                onChange={(event) => {
                  setLanguage(event.target.value);
                  setFieldValue("language", event.target.value);
                  localStorage.setItem("language", event.target.value);
                }}
              >
                <option value="english">
                  {language === "english" ? "English" : "Ingles"}
                </option>
                <option value="spanish">
                  {language === "english" ? "Spanish" : "Español"}
                </option>
              </Field>
            </Form>
          )}
        </Formik>
      </Box>
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "0.5rem",
        }}
      >
        <ButtonMenu to="/">Home</ButtonMenu>
        <ButtonMenu isExpanded to="/nosotros">
          {language === "english" ? "About US" : "Nosotros"}
        </ButtonMenu>
        <ButtonMenu to="/lo-que-hacemos">
          {language === "english" ? "What We Do" : " Lo que hacemos"}
        </ButtonMenu>
        {/*         <ButtonMenu to="/recursos">Recursos</ButtonMenu> */}
        <ButtonMenu to="/lab">
          {language === "english" ? "Soltech Labs" : "Laboratorios Soltech"}
        </ButtonMenu>
        <ButtonMenu to="/contacto" lastBtn>
          {language === "english" ? "Contact" : "Contacto"}
        </ButtonMenu>
      </Box>
    </Box>
  );
};

export default CustomMenu;
