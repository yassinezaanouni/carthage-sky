import React from "react";

const Buttons = ({ state, setState, className }) => {
  return (
    <div className={`flex justify-end gap-5 ${className}`}>
      {state != 1 && (
        <button
          className="rounded-full border border-[#707070] border-transparent py-3 !px-10 font-semibold text-[#1E1E1E] transition-all hover:!px-12"
          onClick={() => setState((prev) => prev - 1)}
        >
          Back
        </button>
      )}
      <button
        className="rounded-full border border-primary-400 border-transparent bg-primary-400 py-3 !px-10 font-semibold text-white transition-all hover:!px-12"
        isColorInverse={true}
        onClick={() => setState((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
