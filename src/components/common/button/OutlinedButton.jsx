import React from "react";

const OutlinedButton = ({ onClick = () => {}, title = "" }) => {
  return (
    <button
      onClick={onClick}
      class="border-2 border-primary-color transition delay-75 text-primary-color hover:bg-sky-600 hover:text-white font-semibold py-2 px-4 rounded-md"
    >
      {title}
    </button>
  );
};

export default OutlinedButton;
