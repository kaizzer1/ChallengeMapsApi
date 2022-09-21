import React from "react";

import { DivLabel, DivForm } from "./styles";

import { Input, InputAdornment, Button, TextField } from "@mui/material/";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export function FormDelivery({ delivery, setDelivery, handleAddDelivery }) {
  return (
    <DivForm>
      <h1 style={{ color: "#FCFCFC" }}> Cadastrar Entregas</h1>

      {/* <FormControl variant="standard"> */}
      <DivLabel>Nome do Cliente</DivLabel>
      <Input
        style={{
          width: "300px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder="digite aqui"
        value={delivery.name_client}
        onChange={(e) => {
          setDelivery((prevState) => {
            return { ...prevState, name_client: e.target.value };
          });
        }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "#00000" }}
          ></InputAdornment>
        }
      />

      <DivLabel>Data de entrega</DivLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={delivery.date}
          disablePast
          onChange={(value) => {
            setDelivery((prevState) => {
              return { ...prevState, date: value };
            });
          }}
          inputFormat="dd/MM/yyyy"
          InputProps={{
            style: {
              width: "300px",
              backgroundColor: "#FCFCFC",
              borderRadius: "8px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <DivLabel>Latitude de Partida</DivLabel>
      <Input
        style={{
          width: "300px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder="digite aqui"
        value={delivery.lat_start}
        onChange={(e) => {
          setDelivery((prevState) => {
            return { ...prevState, lat_start: e.target.value };
          });
        }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "#00000" }}
          ></InputAdornment>
        }
      />

      <DivLabel>Longitude de Partida</DivLabel>
      <Input
        style={{
          width: "300px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder="digite aqui"
        value={delivery.lng_start}
        onChange={(e) => {
          setDelivery((prevState) => {
            return { ...prevState, lng_start: e.target.value };
          });
        }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "#00000" }}
          ></InputAdornment>
        }
      />

      <DivLabel>Latitude de Destino</DivLabel>
      <Input
        style={{
          width: "300px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder="digite aqui"
        value={delivery.lat_finish}
        onChange={(e) => {
          setDelivery((prevState) => {
            return { ...prevState, lat_finish: e.target.value };
          });
        }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "#00000" }}
          ></InputAdornment>
        }
      />

      <DivLabel>Longitude de Destino</DivLabel>
      <Input
        style={{
          width: "300px",
          backgroundColor: "#FCFCFC",
          borderRadius: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        placeholder="digite aqui"
        value={delivery.lng_finish}
        onChange={(e) => {
          setDelivery((prevState) => {
            return { ...prevState, lng_finish: e.target.value };
          });
        }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment
            position="start"
            style={{ color: "#00000" }}
          ></InputAdornment>
        }
      />

      <Button
        onClick={() => {
          handleAddDelivery();
        }}
        variant="contained"
        style={{
          width: "200px",
          marginTop: "20px",
        }}
      >
        Cadastrar
      </Button>
      {/* </FormControl> */}
    </DivForm>
  );
}
