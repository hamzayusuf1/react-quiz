import { Stack, Button, Box, Card, CardContent } from "@mui/material";
import { Check, Clear } from "@mui/icons-material";
import React, { useState } from "react";

const results = [
  {
    question: "Which English Club has won the most Premier League trophies",
    isCorrect: true,
    correctAnswer: "Manchester United",
  },
  {
    question: "Who is the all-time leading goal scorer in the Premier League",
    isCorrect: false,
    correctAnswer: "Alan Shearer",
  },
  {
    question:
      "Which English team has won the premier league whilst conceding the least number of goals",
    isCorrect: true,
    correctAnswer: "Chelsea",
  },
];

export const Results = () => {
  const [displayResults, setDisplayResults] = useState(false);

  const onClick = () => {
    setDisplayResults(!displayResults);
  };

  return (
    <Stack spacing={3}>
      <h1>Quiz complete</h1>
      <Button onClick={onClick} variant="contained">
        {displayResults ? "Hide Results" : "View Results"}
      </Button>
      {displayResults && (
        <Stack spacing={3}>
          {results.map((result) => (
            <Box>
              <Card variant="outlined">
                <CardContent className="bg-amber-50">
                  <div className="flex justify-between">
                    <h1>{result.question}</h1>
                    {result.isCorrect ? <Check /> : <Clear />}
                  </div>
                  <h2>{result.correctAnswer}</h2>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
