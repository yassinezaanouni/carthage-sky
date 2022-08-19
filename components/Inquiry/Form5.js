import React from "react";
import Button from "../Widgets/Button";
import CustomInput from "../Widgets/CustomInput";
import Buttons from "./Widgets/Buttons";
import CustomFileInput from "./Widgets/CustomFileInput";
import Link from "next/link";
const Form5 = ({ state, setState, setInfo }) => {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">TERMS OF CREDIT</h1>
      <form>
        <div className="form-child">
          <CustomInput name="terms-name" label="Name" />
          <CustomInput type="date" name="terms-date" label="Date" />
        </div>
        <div className="form-child ">
          <CustomInput name="terms-tittle" label="Title" />
        </div>

        <style jsx>
          {`
            form {
              display: flex;
              gap: 4rem;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .form-child {
              display: flex;
              flex-direction: column;
              gap: 1.15rem;
              min-width: 18rem;
              flex: 1;
            }
            .cols-2 {
              display: flex;
              gap: 1.5rem;
            }
          `}
        </style>
      </form>
      <div className="mt-12 flex flex-col gap-5">
        <div className="f-ai-c gap-[0.625rem]">
          <input
            required
            type="checkbox"
            name=""
            id="agree1"
            style={{
              accentColor: "var(--primary-400)",
              width: "20px",
              height: "20px",
            }}
          />
          <label htmlFor="agree1">
            I acknowledge that all sales are subject to CARTHAGE SKY's{" "}
            <Link href="#">
              <a className="text-[#0012FF] underline">General Terms and Conditions</a>
            </Link>
            .
          </label>
        </div>
        <div className="f-ai-c gap-[0.625rem]">
          <input
            required
            type="checkbox"
            name=""
            id="agree2"
            style={{
              accentColor: "var(--primary-400)",
              width: "20px",
              height: "20px",
            }}
          />
          <label htmlFor="agree2">
            I have read and I agree to CARTHAGE SKY’s{" "}
            <Link href="#">
              <a className="text-[#0012FF] underline">General Terms and Conditions</a>
            </Link>
            .
          </label>
        </div>
      </div>
      <Buttons state={state} setState={setState} className="mt-[4rem] lg:mt-0" />
    </>
  );
};

export default Form5;
