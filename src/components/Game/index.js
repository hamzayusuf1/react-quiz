import React, { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

import GameForm from "../GameForm";
import Quiz from "../Quiz";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(true);
  return (
    <Container maxWidth="md">
      {gameStarted && (
        <Box className=" mt-5" component="section">
          <GameForm
            handleQuiz={() => {
              setGameStarted(!gameStarted);
            }}
          />
        </Box>
      )}
      {!gameStarted && (
        <Box>
          <Quiz />
        </Box>
      )}
    </Container>
  );
};

export default Game;
