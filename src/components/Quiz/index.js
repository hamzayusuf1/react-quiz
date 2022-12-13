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

import { useGame } from "../../contexts/GameProvider";
import { ProgressBar } from "../ProgressBar";
import { NEXT_QUESTION } from "../../contexts/Actions";

const Quiz = () => {
  const {
    state: { questions, percentageComplete },
    dispatch,
  } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selection, setSelection] = useState();
  const [showQuestion, setShowQuestion] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  console.log(selection);

  const handleClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelection(false);
    } else {
      setShowQuestion(false);
    }
    dispatch({
      type: NEXT_QUESTION,
    });
  };

  const onChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div className="mt-5">
      <ProgressBar progress={percentageComplete} isComplete={!showQuestion} />
      {showQuestion && (
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
          {selection && (
            <FormControl className="w-full">
              <Button variant="contained" onClick={handleClick}>
                Next
              </Button>
            </FormControl>
          )}
        </Box>
      )}
      {!showQuestion && (
        <div>
          <h1 className="text-center font-bold text-3xl">Results container</h1>
        </div>
      )}
    </div>
  );
};

export default Quiz;
