import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

import GameForm from "../GameForm";

const index = () => {
  return (
    <Container maxWidth="md">
      <Box className=" mt-5" component="section">
        <GameForm />
      </Box>
    </Container>
  );
};

export default index;
