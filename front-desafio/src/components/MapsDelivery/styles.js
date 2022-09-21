import { styled } from "@mui/material";

export const DivContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));

export const DivAdress = styled("div")(() => ({
  boxSizing: "border-box",
  width: "240px",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: "4px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  position: "absolute",
  left: "50%",
  marginLeft: "-120px",
  marginTop: "12px",
}));

export const AddressField = styled("input")(() => ({
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: "100%",
  height: "32px",
  marginBottom: "8px",
  padding: "0 12px",
  borderRadius: "4px",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  fontSize: "14px",
  outline: "none",
  textOverflow: "ellipses",
}));
