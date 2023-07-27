import React, { useState } from "react";
import StepFirst from "./StepFirst";
import StepSecond from "./StepSecond";
import { submitJobData, updateJobCard } from "../../api/actions";
import { errorField, httpStatus } from "../../utility/constants";

const CreateJob = ({
  toggleModal = () => {},
  getJobs = () => {},
  jobDetails = {},
}) => {
  const initialState = {
    jobTitle: jobDetails?.jobTitle || "",
    companyName: jobDetails?.companyName || "",
    industry: jobDetails?.industry || "",
    location: jobDetails?.location || "",
    remote: jobDetails?.remote || "",
    experience: {
      min: jobDetails?.experience?.min || "",
      max: jobDetails?.experience?.max || "",
    },
    salary: {
      min: jobDetails?.salary?.min || "",
      max: jobDetails?.salary?.max || "",
    },
    totalEmployee: jobDetails?.totalEmployee || "",
    applyType: jobDetails?.applyType || "",
  };
  const [step, setStep] = useState(1);
  const [field, setField] = useState(initialState);
  const [error, setError] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
  });
  const [btnLoader, setBtnLoader] = useState(false);
  const { jobTitle, companyName, industry } = field;

  const stepHandler = () => {
    if (
      jobTitle.length === 0 &&
      companyName.length === 0 &&
      industry.length === 0
    ) {
      setError({
        ...error,
        jobTitle: errorField.jobTitle,
        companyName: errorField.companyName,
        industry: errorField.industry,
      });
    } else if (jobTitle.length < 2) {
      setError({
        ...error,
        jobTitle: errorField.jobTitle,
      });
    } else if (companyName.length < 3) {
      setError({
        ...error,
        companyName: errorField.companyName,
      });
    } else if (industry.length < 3) {
      setError({
        ...error,
        industry: errorField.industry,
      });
    } else {
      setStep((step) => step + 1);
    }
  };

  const submitHandler = async () => {
    setBtnLoader(true);
    let data = {};
    if (jobDetails !== null) {
      data = await updateJobCard(jobDetails.id, field);
    } else {
      data = await submitJobData(field);
    }
    if (httpStatus.includes(data.status)) {
      setBtnLoader(false);
      toggleModal();
      getJobs();
    } else {
      setBtnLoader(false);
      alert("Something went wrong!!!");
    }
  };

  if (step === 1) {
    return (
      <StepFirst
        stepHandler={stepHandler}
        setField={setField}
        field={field}
        error={error}
        setError={setError}
      />
    );
  } else
    return (
      <StepSecond
        submitHandler={submitHandler}
        setField={setField}
        field={field}
        jobDetails={jobDetails}
        btnLoader={btnLoader}
      />
    );
};

export default CreateJob;
