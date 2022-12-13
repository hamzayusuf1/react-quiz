import { LinearProgress, Box } from "@mui/material";
import React from "react";

export const ProgressBar = ({ progress, isComplete }) => {
  return (
    <div className="flex justify-center h-6">
      <Box className="w-full">
        <LinearProgress
          variant="determinate"
          color={isComplete ? "success" : "primary"}
          value={progress}
        />
      </Box>

      <span className="font-semibold mx-3 align-text-top">{`${Math.round(
        progress
      )}%`}</span>
    </div>
  );
};
