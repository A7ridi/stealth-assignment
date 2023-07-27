import React from "react";

const InputRadio = ({ label = "", setField = () => {}, field }) => {
  return (
    <label className="flex radio gap-x-1 items-center cursor-pointer">
      <input
        type="radio"
        name="sfg"
        value={label}
        checked={label === field}
        onChange={(e) => setField(e.target.value)}
      />
      <div className="text-placeholder-color mb-[2px]">{label}</div>
    </label>
  );
};

export default InputRadio;
