import React, { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { apiFipe } from "../../services/api";
import { logout } from "../../services/auth";

import { Container, Content } from "./styles";

function Search(props) {
  const [vehicle, setVehicle] = useState({
    type: "",
    marca: "",
    modelo: "",
    ano: "",
  });
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [veiculo, setVeiculo] = useState();

  async function getMarcas(type) {
    try {
      const res = await apiFipe.get(`/${type}/marcas`);
      setMarcas(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getModelos(type, marcaId) {
    try {
      const res = await apiFipe.get(`/${type}/marcas/${marcaId}/modelos`);
      setModelos(res.data.modelos);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAnos(type, marcaId, modeloId) {
    try {
      const res = await apiFipe.get(
        `/${type}/marcas/${marcaId}/modelos/${modeloId}/anos`
      );
      setAnos(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getVeiculo(type, marcaId, modeloId, anoId) {
    try {
      const res = await apiFipe.get(
        `/${type}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`
      );
      setVeiculo(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <ButtonGroup>
        <Button onClick={() => props.history.push("/")}>Home</Button>
        <Button
          onClick={() => {
            logout();
            props.history.push("/");
          }}
        >
          Logout
        </Button>
      </ButtonGroup>
      <Content>
        <Autocomplete
          options={["carros", "motos", "caminhoes"]}
          getOptionLabel={(option) => option}
          value={vehicle.type}
          onChange={(event, newValue) => {
            newValue && setVehicle({ type: newValue });
            newValue && getMarcas(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Informe o tipo de veiculo"
              variant="filled"
            />
          )}
        />
        {vehicle.type && (
          <Autocomplete
            options={marcas}
            getOptionLabel={(option) => option.nome}
            value={vehicle.marca}
            onChange={(event, newValue) => {
              newValue &&
                setVehicle({ type: vehicle.type, marca: newValue.codigo });
              newValue && getModelos(vehicle.type, newValue.codigo);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Informe o marca" variant="filled" />
            )}
          />
        )}
        {vehicle.marca && (
          <Autocomplete
            options={modelos}
            getOptionLabel={(option) => option.nome}
            value={vehicle.modelo}
            onChange={(event, newValue) => {
              newValue &&
                setVehicle({
                  type: vehicle.type,
                  marca: vehicle.marca,
                  modelo: newValue.codigo,
                });
              newValue && getAnos(vehicle.type, vehicle.marca, newValue.codigo);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Informe o modelo"
                variant="filled"
              />
            )}
          />
        )}

        {vehicle.modelo && (
          <Autocomplete
            options={anos}
            getOptionLabel={(option) => option.nome}
            value={vehicle.ano}
            onChange={(event, newValue) => {
              newValue &&
                setVehicle({
                  type: vehicle.type,
                  ...vehicle,
                  ano: newValue.codigo,
                });
              newValue &&
                getVeiculo(
                  vehicle.type,
                  vehicle.marca,
                  vehicle.modelo,
                  newValue.codigo
                );
            }}
            renderInput={(params) => (
              <TextField {...params} label="Informe o ano" variant="filled" />
            )}
          />
        )}
        {veiculo && (
          <Card
            elevation={3}
            style={{
              marginTop: 50,
              position: "relative",
            }}
          >
            <CardContent style={{ zIndex: 5 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h6">{veiculo.Marca}</Typography>
                <Typography>{veiculo.CodigoFipe}</Typography>
              </div>
              <Typography variant="h5">{veiculo.Modelo}</Typography>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Ano: {veiculo.AnoModelo}</Typography>
                <Typography>{veiculo.Combustivel}</Typography>
              </div>
            </CardContent>
            <CardContent style={{ backgroundColor: "#49CCFF" }}>
              <Typography>Preço médio:</Typography>
              <Typography variant="h4">{veiculo.Valor}</Typography>
              <Typography>
                Mês de referência: {veiculo.MesReferencia}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Content>
    </Container>
  );
}

export default Search;
