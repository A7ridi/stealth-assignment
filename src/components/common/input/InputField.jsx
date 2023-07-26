import React from "react";

const InputField = ({
  label = "",
  placeholder = "",
  required = false,
  className = "",
  labelClass = "",
  field = "",
  setField = () => {},
}) => {
  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <label
        className={`text-md font-semibold ${labelClass || "text-dark-font"}`}
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        className="appearance-none border rounded-md w-full py-2 px-3 text-gray-700 placeholder:text-placeholder-color border-card-border leading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
    </div>
  );
};

export default InputField;
