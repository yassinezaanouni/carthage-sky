import Image from "next/image";
import React from "react";

const TopBar = ({ state, className }) => {
  return (
    <div
      className={`flex flex-wrap items-end gap-3 lg:items-center lg:justify-start ${className}`}
    >
      <Item title="Company info" value={1} state={state} />
      <span className="font-semibold tracking-wider text-[#707070]">
        ----------
      </span>
      <Item title="Owner/Officer" value={2} state={state} />
      <span className="font-semibold tracking-wider text-[#707070]">
        ----------
      </span>
      <Item title="Financial Information" value={3} state={state} />
      <span className="font-semibold tracking-wider text-[#707070]">
        ----------
      </span>
      <Item title="Trade References" value={4} state={state} />
      <span className="font-semibold tracking-wider text-[#707070]">
        ----------
      </span>
      <Item title="Terms" value={5} state={state} />
    </div>
  );
};

export default TopBar;

const Item = ({ title, value, state }) => {
  const isDone = value < state ? 1 : value === state ? 0 : -1;
  return (
    <div className="flex h-20 w-[100px] flex-col  items-center justify-between gap-[0.625rem] text-center lg:h-auto lg:w-auto lg:flex-row">
      <div
        className={`f-ai-c aspect-square h-8 w-8 justify-center rounded-[50%] border border-transparent p-2 text-xl shadow-sm transition-all duration-300 lg:h-11 lg:w-11 ${
          isDone == 1
            ? "bg-[#09DC16]"
            : isDone == 0
            ? "scale-105 bg-primary-400 text-white shadow-md"
            : " border-[#707070] text-black"
        }`}
      >
        {isDone == 1 ? (
          <Image
            src="/icons/inquiry/check.svg"
            width={21.22}
            height={13.63}
            alt=""
            layout="fixed"
          />
        ) : (
          value
        )}
      </div>

      <label className="text-sm lg:text-base lg:text-lg">{title}</label>
    </div>
  );
};
