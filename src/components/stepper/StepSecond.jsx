import React from "react";
import StepHeader from "./StepHeader";
import PrimaryButton from "../common/button/PrimaryButton";
import InputField from "../common/input/InputField";
import InputRadio from "../common/input/InputRadio";
import { radioOptions } from "../../utility/constants";

const StepSecond = ({
  submitHandler = () => {},
  field = "",
  setField = () => {},
  btnLoader = false,
  jobDetails = {},
}) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col gap-y-6">
        <StepHeader step="2" />

        <div className="flex gap-x-6">
          <InputField
            label="Experience"
            placeholder="Minimum"
            className="w-1/2"
            field={field.experience.min}
            setField={(min) =>
              setField({ ...field, experience: { ...field.experience, min } })
            }
          />

          <InputField
            label="."
            labelClass="text-white"
            placeholder="Maximum"
            className="w-1/2"
            field={field.experience.max}
            setField={(max) =>
              setField({ ...field, experience: { ...field.experience, max } })
            }
          />
        </div>

        <div className="flex gap-x-6">
          <InputField
            label="Salary"
            placeholder="Minimum"
            className="w-1/2"
            field={field.salary.min}
            setField={(min) =>
              setField({ ...field, salary: { ...field.salary, min } })
            }
          />

          <InputField
            label="."
            labelClass="text-white"
            placeholder="Maximum"
            className="w-1/2"
            field={field.salary.max}
            setField={(max) =>
              setField({ ...field, salary: { ...field.salary, max } })
            }
          />
        </div>

        <InputField
          label="Total employee"
          placeholder="ex. 100"
          field={field.totalEmployee}
          setField={(totalEmployee) => setField({ ...field, totalEmployee })}
        />

        <div className="flex flex-col gap-y-2">
          <label className="text-md font-semibold text-dark-font">
            Apply type
          </label>
          <div className="flex gap-x-4">
            {radioOptions.map((option) => (
              <InputRadio
                label={option}
                key={option}
                field={field.applyType}
                setField={(applyType) => setField({ ...field, applyType })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <PrimaryButton
          title={btnLoader ? "Saving..." : "Save"}
          onClick={submitHandler}
          disabled={btnLoader}
        />
      </div>
    </div>
  );
};

export default StepSecond;
