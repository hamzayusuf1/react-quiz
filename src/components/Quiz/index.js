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
import { Results } from "../Results";

const Quiz = () => {
  const {
    state: { questions, percentageComplete },
    dispatch,
  } = useGame();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selection, setSelection] = useState();
  const [showQuestion, setShowQuestion] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];

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

  const label = "Hamza";

  return (
    <div className="mt-5">
      <ProgressBar progress={percentageComplete} isComplete={!showQuestion} />
      {showQuestion && (
        <Box className="border-black mt-2 flex flex-col">
          <FormControl>
            <FormLabel>{currentQuestion.question}</FormLabel>
            <RadioGroup onChange={onChange}>
              {currentQuestion.options.map((option) => (
                <FormControlLabel
                  control={<Radio />}
                  label={option}
                  value={option}
                />
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
          <Results />
        </div>
      )}
    </div>
  );
};

export default Quiz;

{
  /* <RadioGroup onChange={onChange}>
{currentQuestion.options.map((option, index) => (
  <FormControlLabel
    control={<Radio />}
    label={index}
    value={option}
    key={index}
  />
))}
</RadioGroup> */
}
