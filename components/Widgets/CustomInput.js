import React from "react";

const CustomInput = ({ type = "text", name, label, required = false }) => {
  return (
    <div className="w-full">
      <label htmlFor={name}>{label}</label>
      <input type={type} required={required} />
      <style jsx>
        {`
          input {
            width: 100%;
            border: 1px solid #ccc;
            padding: 0.75rem 1.25rem;
            margin-top: 0.625rem;
            border-radius: 5px;
          }
          input:focus {
            outline: none;
            border-color: var(--primary-400);
          }
        `}
      </style>
    </div>
  );
};

export default CustomInput;
