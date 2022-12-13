import React from "react";
import {
  FormControl,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useGame } from "../../contexts/GameProvider";
import { START_GAME, CHANGE_CATEGORY } from "../../contexts/Actions";

const GameForm = () => {
  const {
    state: { category },
    dispatch,
  } = useGame();

  const onChange = (e) => {
    dispatch({
      type: CHANGE_CATEGORY,
      payload: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: START_GAME,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3}>
        <FormControl fullWidth>
          <InputLabel id="category">Choose a category</InputLabel>
          <Select
            labelId="gameCategoryLabel"
            id="gameCategory"
            onChange={onChange}
            value={category}
          >
            <MenuItem value="football" sx={{ width: "100%" }}>
              Football
            </MenuItem>
            <MenuItem value="basketball" sx={{ width: "100%" }}>
              Basketball
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Button onClick={onSubmit}>Start Quiz</Button>
        </FormControl>
      </Stack>
    </form>
  );
};

export default GameForm;
