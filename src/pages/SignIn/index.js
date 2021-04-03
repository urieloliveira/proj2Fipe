import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Link, Typography } from "@material-ui/core";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, SignInForm } from "./styles";

function SignIn(props) {
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnChange: false,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/login", {
          email: values.email,
          password: values.password,
        });

        login(res.data.token, { email: values.email });
        console.log(res.data);
        props.history.push("/search");
      } catch (err) {
        setError("Email ou senha incorreto");
      }
    },
  });

  return (
    <Container>
      <Typography variant="h5">Log in</Typography>
      <SignInForm onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          variant="filled"
          autoFocus
          label="Informe o email"
          error={formik.errors.email || error}
          helperText={
            formik.errors.email || error ? formik.errors.email || error : null
          }
        />
        <TextField
          id="password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          variant="filled"
          label="Informe a senha"
          error={formik.errors.password || error}
          helperText={
            formik.errors.password || error
              ? formik.errors.password || error
              : null
          }
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100%" }}
        >
          Entrar
        </Button>
        <Link href="/signUp" style={{ marginTop: 5, textAlign: "center" }}>
          Criar conta
        </Link>
      </SignInForm>
    </Container>
  );
}

export default SignIn;
