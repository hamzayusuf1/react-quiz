import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { useGame } from "../../contexts/GameProvider";

import GameForm from "../GameForm";
import Quiz from "../Quiz";

const Game = () => {
  const { state } = useGame();
  console.log(state);

  return (
    <Container maxWidth="md">
      {!state.gameStarted && (
        <Box className=" mt-5" component="section">
          <GameForm />
        </Box>
      )}
      {state.gameStarted && (
        <Box>
          <Quiz />
        </Box>
      )}
    </Container>
  );
};

export default Game;
