import React, { useState } from "react";
import {
  FormControl,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const GameForm = ({ handleQuiz }) => {
  return (
    <form>
      <Stack spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="category">Choose a category</InputLabel>
          <Select labelId="gameCategoryLabel" id="gameCategory">
            <MenuItem sx={{ width: "100%" }}>Category 1</MenuItem>
            <MenuItem sx={{ width: "100%" }}>Category 2</MenuItem>
            <MenuItem sx={{ width: "100%" }}>Category 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button onClick={handleQuiz}>Start Quiz</Button>
        </FormControl>
      </Stack>
    </form>
  );
};

export default GameForm;
