import React, { useState } from "react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import { submitJobData } from "../../api/actions";
import { httpStatus } from "../../utility/constants";

const initialState = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remote: "",
  experience: { min: "", max: "" },
  salary: { min: "", max: "" },
  totalEmployee: "",
  applyType: "",
};

const CreateJob = ({ toggleModal = () => {} }) => {
  const [step, setStep] = useState(1);
  const [field, setField] = useState(initialState);
  const [error, setError] = useState(initialState);
  const [btnLoader, setBtnLoader] = useState(false);

  const stepHandler = () => setStep((step) => step + 1);

  const submitHandler = async () => {
    setBtnLoader(true);
    const data = await submitJobData(field);
    if (data.status === httpStatus.OK) {
      setBtnLoader(false);
      toggleModal();
    } else {
      alert("Something went wrong!!!");
    }
  };

  if (step === 1) {
    return (
      <StepFirst stepHandler={stepHandler} setField={setField} field={field} />
    );
  } else
    return (
      <StepSecond
        submitHandler={submitHandler}
        setField={setField}
        field={field}
        btnLoader={btnLoader}
      />
    );
};

export default CreateJob;
