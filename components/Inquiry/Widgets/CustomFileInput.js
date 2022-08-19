import React, { useState } from "react";

const CustomFileInput = ({ label, name }) => {
  const [file, setFile] = useState({
    name: "Choose a File",
  });
  return (
    <div>
      <label htmlFor="" className="">
        {label}
      </label>
      <div className="file-container relative">
        {file.name}

        <input
          name={name}
          type="file"
          className=" absolute inset-0 cursor-pointer opacity-0"
          onChange={(e) => setFile(e.target.files[0])}
          accept="application/pdf"
        />
        <button type="button" className="bg-transparent text-sm text-primary-400">
          Upload File
        </button>
        <style jsx>
          {`
            .file-container {
              width: 100%;
              border: 1px solid #ccc;
              padding: 0.75rem 1.25rem;
              margin-top: 0.625rem;
              border-radius: 5px;
              display: flex;
              justify-content: space-between;
            }
            div:focus {
              outline: none;
              border-color: var(--primary-400);
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default CustomFileInput;
