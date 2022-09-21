import React, { useEffect, useState } from "react";

import {
  ContainerRegisterDelivery,
  DivRegisterDelivery,
  DivMapsDelivery,
} from "./styles";

import { useNavigate } from "react-router-dom";

import { FormDelivery } from "../../components/FormDelivery";
import { MapsDelivery } from "../../components/MapsDelivery";

import Alert from "@mui/material/Alert";

import api from "../../Services/api";

export default function RegisterDelivery() {
  const navigate = useNavigate();

  const [delivery, setDelivery] = useState({});

  const [alert, setAlert] = useState({ open: false });

  async function handleAddDelivery() {
    if (!delivery.name_client) {
      return handleShowAlert("warning", "Porfavor, prencha o campo nome");
    }
    if (!delivery.date) {
      return handleShowAlert("warning", "Porfavor, prencha o campo Data");
    }
    if (!delivery.lat_start) {
      return handleShowAlert(
        "warning",
        "Porfavor, prencha o campo Latitude de Partida"
      );
    }
    if (!delivery.lng_start) {
      return handleShowAlert(
        "warning",
        "Porfavor, prencha o campo Longitude de Partida"
      );
    }
    if (!delivery.lat_finish) {
      return handleShowAlert(
        "warning",
        "Porfavor, prencha o campo Latitude de Chegada"
      );
    }
    if (!delivery.lng_finish) {
      return handleShowAlert(
        "warning",
        "Porfavor, prencha o campo Longitude de Chegada"
      );
    }
    try {
      await api.post(`/delivery`, delivery);

      handleShowAlert("success", "Foi cadastrado uma nova entrega");

      navigate("/");
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

  return (
    <ContainerRegisterDelivery>
      {alert.open && <Alert severity={alert.severity}>{alert.message}</Alert>}
      <DivRegisterDelivery>
        <FormDelivery
          delivery={delivery}
          setDelivery={setDelivery}
          handleAddDelivery={handleAddDelivery}
        />
        <DivMapsDelivery>
          <MapsDelivery delivery={delivery} setDelivery={setDelivery} />
        </DivMapsDelivery>
      </DivRegisterDelivery>
    </ContainerRegisterDelivery>
  );
}
