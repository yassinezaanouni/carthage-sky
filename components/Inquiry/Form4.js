import React from "react";
import Button from "../Widgets/Button";
import CustomInput from "../Widgets/CustomInput";
import Buttons from "./Widgets/Buttons";
import CustomFileInput from "./Widgets/CustomFileInput";

const Form4 = ({ state, setState, setInfo }) => {
  return (
    <form className="flex flex-col gap-20">
      {/* part 1 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">TRADE REFERENCES</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="owner-fullname" label="Name" />
            <CustomInput name="owner-country" label="Country" />
            <div className="cols-2">
              <CustomInput name="owner-zip-code" label="Zip Code" />
              <CustomInput type="email" name="owner-email" label="Email" />
            </div>
          </div>
          <div className="form-child ">
            <CustomInput name="owner-address" label="Physical Address" />
            <div className="cols-2">
              <CustomInput name="owner-state" label="State/Province" />
              <CustomInput name="owner-city" label="City" />
            </div>
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Service of intrest</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="service1" label="Service" />
            <CustomInput name="service1" label="Service" />
            <CustomInput name="service1" label="Service" />
            <CustomInput name="service1" label="Service" />
            <CustomInput name="service1" label="Service" />
          </div>
          <div className="form-child ">
            <CustomInput type="email" name="service-code" label="A/P ICAO code" />
            <CustomInput type="email" name="service-code" label="A/P ICAO code" />
            <CustomInput type="email" name="service-code" label="A/P ICAO code" />
            <CustomInput type="email" name="service-code" label="A/P ICAO code" />
            <CustomInput type="email" name="service-code" label="A/P ICAO code" />
          </div>
        </div>
        <div className="mt-16">
          <label htmlFor="">If Other please specify</label>
          <textarea
            name=""
            id=""
            className="mt-[0.625rem] h-[7.625rem] w-full resize-none border border-[#CCCCCC]"
          ></textarea>
        </div>
      </div>

      <Buttons state={state} setState={setState} />
      <style jsx>
        {`
          .form {
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
  );
};

export default Form4;
