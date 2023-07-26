import React from "react";
import InputField from "../common/input/InputField";
import PrimaryButton from "../common/button/PrimaryButton";
import StepHeader from "./StepHeader";

const StepFirst = ({
  stepHandler = () => {},
  setField = () => {},
  field = "",
}) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-6">
        <StepHeader step="1" />

        <InputField
          label="Job title"
          placeholder="ex. UX UI Designer"
          field={field.jobTitle}
          setField={(jobTitle) => setField({ ...field, jobTitle })}
          required
        />

        <InputField
          label="Company name"
          placeholder="ex. Google"
          field={field.companyName}
          setField={(companyName) => setField({ ...field, companyName })}
          required
        />

        <InputField
          label="Industry"
          placeholder="ex. Information Technology"
          field={field.industry}
          setField={(industry) => setField({ ...field, industry })}
          required
        />

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
