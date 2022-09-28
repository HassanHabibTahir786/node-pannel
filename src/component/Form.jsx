import React from "react";
import { Box, Container, Grid, Button, TextField } from "@mui/material";
import CusTable from "./CusTable";
const FormData = () => {
  return (
    <Box py={5}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <TextField
                label="Customer Num"
                variant="outlined"
                type="text"
                placeholder="Customer Num"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <TextField
                label="Doc Num"
                variant="outlined"
                type="text"
                placeholder="Doc Num"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <TextField
                label="Customer"
                variant="outlined"
                type="text"
                placeholder="Customer"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <TextField
                label="Date"
                variant="outlined"
                type="text"
                placeholder="Date"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>

          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <TextField
                label="Ref num"
                variant="outlined"
                type="text"
                placeholder="Ref num"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <TextField
                label="Due Date"
                variant="outlined"
                type="text"
                placeholder="Due Date"
                autoComplete="off"
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box py={4}>
          <CusTable />
        </Box>

        <Grid container spacing={3}>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <TextField
                label="Walllet of paying party"
                variant="outlined"
                type="text"
                placeholder="Walllet of paying party"
                autoComplete="off"
                sx={{
                  width: "300px",
                  textAlign: "center",
                }}
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <TextField
                label="Tax"
                variant="outlined"
                type="text"
                placeholder="Tax"
                autoComplete="off"
                sx={{
                  width: "300px",
                }}
                FormHelperTextProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>

          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <TextField
                label="Token Type (drop down)"
                variant="outlined"
                type="text"
                placeholder="Token Type (drop down)"
                autoComplete="off"
                sx={{
                  width: "300px",
                  textAlign: "center",
                }}
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={6}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <TextField
                label="Total Amount to pay"
                variant="outlined"
                type="text"
                placeholder="Total Amount to pay"
                autoComplete="off"
                sx={{
                  width: "300px",
                }}
                FormHelperTextProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
                // inputProps={{ style: { fontSize: 15 } }}
                // InputLabelProps={{ style: { fontSize: 15, color: "GrayText" } }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box marginTop="4rem">
          <hr></hr>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button
            sx={{
              border: "1px solid #ABABAB",
              padding: "1rem 2rem",
              fontWeight: "bold",
              color: "#666666",
              fontSize: "1rem",
            }}
          >
            Safe as draft
          </Button>
          <Button
            sx={{
              border: "1px solid #ABABAB",
              padding: "1rem 2rem",
              fontWeight: "bold",
              color: "#666666",
              fontSize: "1rem",
            }}
          >
            Submit payment request
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FormData;
