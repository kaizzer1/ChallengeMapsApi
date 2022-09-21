import { DivTables } from "./styles";

import { format } from "date-fns";

import {
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  Stack,
  Button,
} from "@mui/material/";

import { Delete as DeleteIcon } from "@mui/icons-material/";

export function TableDelivery({ deliveries, handleDeleteDelivery, search }) {
  return (
    <DivTables>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, height: 180 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "16px" }}>
                <strong>Id Entrega</strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Nome do Cliente</strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Data de entrega</strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Latitude de Partida </strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Longitude de Partida</strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Latitude de Destino </strong>
              </TableCell>
              <TableCell align="center" style={{ fontSize: "16px" }}>
                <strong>Longitude de Destino </strong>
              </TableCell>
              <TableCell
                align="center"
                style={{ fontSize: "16px" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveries
              .filter((delivery) =>
                delivery.name_client
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: "60px",
                  }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="center">{item.name_client}</TableCell>
                  <TableCell align="center">
                    {format(new Date(item.date), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell align="center">{item.lat_start}</TableCell>
                  <TableCell align="center">{item.lng_start}</TableCell>
                  <TableCell align="center">{item.lat_finish}</TableCell>
                  <TableCell align="center">{item.lng_finish}</TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="row"
                      spacing={2}
                      styles={{ padding: "10px" }}
                    >
                      <Button
                        onClick={() => {
                          handleDeleteDelivery(item.id);
                        }}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DivTables>
  );
}
