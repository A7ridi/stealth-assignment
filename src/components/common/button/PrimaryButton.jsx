import React from "react";

const PrimaryButton = ({
  onClick = () => {},
  title = "",
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-primary-color hover:bg-sky-600 text-white font-normal py-2 px-4 rounded-md"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
