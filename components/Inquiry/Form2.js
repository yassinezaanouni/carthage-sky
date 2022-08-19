import React from "react";
import Button from "../Widgets/Button";
import CustomInput from "../Widgets/CustomInput";
import Buttons from "./Widgets/Buttons";
import CustomFileInput from "./Widgets/CustomFileInput";

const Form2 = ({ state, setState, setInfo }) => {
  return (
    <form className="flex flex-col gap-20">
      {/* part 1 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Owner/Officer</h1>
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
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Operations Contact</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="operation-phone" label="Phone" />
            <CustomInput type="email" name="operation-email" label="Email Address for Fuel Authorizations" />
          </div>
          <div className="form-child ">
            <CustomInput type="email" name="operation-email2" label="Email" />
          </div>
        </div>
      </div>

      {/* part 3 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Pricing contact</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="pricing-phone" label="Phone" />
            <CustomInput type="email" name="pricing-email" label="Email Address for Price Notices" />
          </div>
          <div className="form-child ">
            <CustomInput type="email" name="pricing-email2" label="Email" />
          </div>
        </div>
      </div>

      {/* part 4 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Accounts Payable Contact</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="accounts-name" label="Name" />
            <CustomInput type="email" name="accounts-email" label="Email" />
          </div>
          <div className="form-child ">
            <CustomInput name="accounts-phone" label="Phone" />
            <CustomInput type="email" name="accounts-email2" label="Email Address for Invoice Delivery" />
          </div>
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

export default Form2;
