import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  Box,
  FormLabel,
} from "@mui/material";

import { questions } from "../../data/questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [optionSelected, setOptionSelected] = useState();

  const currentQuestion = questions.sports[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(optionSelected);

  const handleClick = () => {
    if (currentQuestionIndex < 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setOptionSelected(false);
    }
  };

  const onChange = (e) => {
    setOptionSelected(e.target.value);
  };

  return (
    <div>
      <Box className="border-black mt-2 flex flex-col">
        <FormControl>
          <FormLabel>{currentQuestion.question}</FormLabel>
          <RadioGroup onChange={onChange}>
            {currentQuestion.options.map((option, index) => (
              <FormControlLabel
                control={<Radio />}
                label={index}
                value={option}
                key={index}
              ></FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>
        {optionSelected && (
          <FormControl className="w-full">
            <Button variant="contained">Next</Button>
          </FormControl>
        )}
      </Box>
    </div>
  );
};

export default Quiz;
