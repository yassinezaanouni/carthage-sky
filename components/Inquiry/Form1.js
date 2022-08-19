import React from "react";
import Button from "../Widgets/Button";
import CustomInput from "../Widgets/CustomInput";
import Buttons from "./Widgets/Buttons";
import CustomFileInput from "./Widgets/CustomFileInput";

const Form1 = ({ state, setState, setInfo }) => {
  return (
    <>
      <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Company info</h1>
      <form>
        <div className="form-child">
          <CustomInput name="fullname" label="Legal Name of Purchaser" />
          <div className="cols-2">
            <CustomInput name="phone" label="Phone" />
            <CustomInput name="fax" label="Fax" />
          </div>
          <CustomInput name="office-address" label="Registered Office Address" />
          <div className="cols-2">
            <CustomInput name="state" label="State" />
            <CustomInput name="zip-code" label="Zip Code" />
          </div>
          <CustomFileInput name="iso-certificate" label="ISO Certificate or equivalent" />
          <CustomFileInput
            name="proof-of-compliance"
            label="Proof of compliance with anti-corruption and anti-bribery laws."
          />
        </div>
        <div className="form-child ">
          <CustomInput name="trading-name" label="Trading Name (DBA)" />
          <div className="cols-2">
            <CustomInput type="email" name="email" label="Email" />
            <CustomInput name="website" label="Website" />
          </div>
          <div className="cols-2">
            <CustomInput name="country" label="Country" />
            <CustomInput name="city" label="City" />
          </div>
          <CustomInput name="po-box" label="P.O.Box" />
          <CustomFileInput name="insurance" label="Insurance" />
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
      <Buttons state={state} setState={setState} className="mt-[4rem] lg:mt-0" />
    </>
  );
};

export default Form1;
