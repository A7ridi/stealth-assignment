import React from "react";

const StepHeader = ({ step }) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-dark-font text-xl">Create a job</h2>
      <h2 className="text-dark-font text-lg font-semibold">Step {step}</h2>
    </div>
  );
};

export default StepHeader;
