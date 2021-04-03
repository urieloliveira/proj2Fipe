import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Link, Typography } from "@material-ui/core";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Container, SignUpForm } from "./styles";

function SignUp(props) {
  const [error, setError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Senhas não coincidem"
    ),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const res = await api.post("/register", {
          email: values.email,
          password: values.password,
        });

        login(res.data.token, { email: values.email });
        console.log(res.data);
        props.history.push("/signIn");
      } catch (err) {
        setError("Email ou senha incorreto");
      }
    },
  });

  return (
    <Container>
      <Typography variant="h5">Criar conta</Typography>
      <SignUpForm onSubmit={formik.handleSubmit}>
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
        <TextField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          variant="filled"
          label="Confirme sua senha"
          error={formik.errors.confirmPassword || error}
          helperText={
            formik.errors.confirmPassword || error
              ? formik.errors.confirmPassword || error
              : null
          }
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100%" }}
        >
          Criar conta
        </Button>
        <Link href="/signIn" style={{ marginTop: 5, textAlign: "center" }}>
          Já possuo uma conta
        </Link>
      </SignUpForm>
    </Container>
  );
}

export default SignUp;
