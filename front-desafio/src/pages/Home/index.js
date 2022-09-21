import React, { useEffect, useState } from "react";

import { ContainerHome, DivHome, DivHeader } from "./styles";

import { TableDelivery } from "../../components/TableDelivery";

import { useNavigate } from "react-router-dom";

import api from "../../Services/api";

import {
  Input,
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  Icon,
  Alert,
} from "@mui/material/";

import {
  Search as SearchIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material/";

export function Home() {
  const navigate = useNavigate();

  const [alert, setAlert] = useState({ open: false });

  const [deliveries, setDeliveries] = useState([]);

  const [search, setSearch] = useState("");

  function handleAdd() {
    navigate("./register");
  }

  async function handleGetDelivery() {
    try {
      const { data } = await api.get("/deliveries");

      setDeliveries(data);
    } catch (error) {}
  }

  async function handleDeleteDelivery(id) {
    try {
      await api.delete(`/delivery/${id}`);

      handleShowAlert("success", "Rota excluida com sucesso");

      handleGetDelivery();
    } catch ({ response }) {
      handleShowAlert("error", response.data);
    }
  }

  function handleShowAlert(severity, message) {
    setAlert({ open: true, severity, message });
  }

  function handleCloseAlert() {
    setAlert({ open: false });
  }

  useEffect(() => {
    setTimeout(() => handleCloseAlert(), 6000);
  }, [alert]);

  useEffect(() => {
    handleGetDelivery();
  }, []);

  return (
    <ContainerHome>
      {alert.open && <Alert severity={alert.severity}>{alert.message}</Alert>}
      <DivHome>
        <h1 style={{ color: "#FCFCFC" }}>Entregas</h1>
        <DivHeader>
          <FormControl variant="standard">
            <InputLabel
              htmlFor="input-with-icon-adornment"
              style={{ color: "#FCFCFC", fontSize: "16px" }}
            >
              Procurar
            </InputLabel>
            <Input
              style={{
                width: "300px",
                backgroundColor: "#FCFCFC",
                borderRadius: "8px",
                height: "30px",
              }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start" style={{ color: "#00000" }}>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <IconButton
            style={{ backgroundColor: "#FCFCFC" }}
            onClick={() => {
              handleAdd();
            }}
          >
            <Icon
              style={{
                display: "flex",
                justfyContent: "center",
                alignItens: "center",
              }}
            >
              <AddIcon style={{ color: "#00000" }} />
            </Icon>
          </IconButton>
        </DivHeader>

        <TableDelivery
          search={search}
          handleDeleteDelivery={handleDeleteDelivery}
          deliveries={deliveries}
        />
      </DivHome>
    </ContainerHome>
  );
}
