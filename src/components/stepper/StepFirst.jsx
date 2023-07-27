import React from "react";
import InputField from "../common/input/InputField";
import PrimaryButton from "../common/button/PrimaryButton";
import StepHeader from "./StepHeader";
import { errorField } from "../../utility/constants";

const StepFirst = ({
  stepHandler = () => {},
  setField = () => {},
  field = "",
  error = "",
  setError = () => {},
}) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-6">
        <StepHeader step="1" />
        <div>
          <InputField
            label="Job title"
            placeholder="ex. UX UI Designer"
            field={field.jobTitle}
            setField={(jobTitle) => {
              setField({ ...field, jobTitle });
              setError({
                ...error,
                jobTitle: jobTitle.length < 2 ? errorField.jobTitle : "",
              });
            }}
            required
          />
          <h4 className="mt-1 text-rose-500">{error.jobTitle}</h4>
        </div>

        <div>
          <InputField
            label="Company name"
            placeholder="ex. Google"
            field={field.companyName}
            setField={(companyName) => {
              setField({ ...field, companyName });
              setError({
                ...error,
                companyName:
                  companyName.length < 3 ? errorField.companyName : "",
              });
            }}
            required
          />
          <h4 className="mt-1 text-rose-500">{error.companyName}</h4>
        </div>

        <div>
          <InputField
            label="Industry"
            placeholder="ex. Information Technology"
            field={field.industry}
            setField={(industry) => {
              setField({ ...field, industry });
              setError({
                ...error,
                industry: industry.length < 3 ? errorField.industry : "",
              });
            }}
            required
          />
          <h4 className="mt-1 text-rose-500">{error.industry}</h4>
        </div>

        <div className="flex gap-x-6">
          <InputField
            label="Location"
            placeholder="ex. Chennai"
            className="w-1/2"
            field={field.location}
            setField={(location) => setField({ ...field, location })}
          />

          <InputField
            label="Remote Type"
            placeholder="ex. In-office"
            className="w-1/2"
            field={field.remote}
            setField={(remote) => setField({ ...field, remote })}
          />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <PrimaryButton title="Next" onClick={stepHandler} />
      </div>
    </div>
  );
};

export default StepFirst;
