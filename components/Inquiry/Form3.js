import React from "react";
import Button from "../Widgets/Button";
import CustomInput from "../Widgets/CustomInput";
import Buttons from "./Widgets/Buttons";
import CustomFileInput from "./Widgets/CustomFileInput";

const Form3 = ({ state, setState, setInfo }) => {
  return (
    <form className="flex flex-col gap-20">
      {/* part 1 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Financial Informations</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput name="financial-name" label="Bank name" />
            <div className="cols-2">
              <CustomInput name="financial-country" label="Country" />
              <CustomInput name="financial-city" label="City" />
            </div>
            <CustomInput name="financial-account-number" label="Account No." />
            <CustomInput name="financial-swift" label="SWIFT" />{" "}
            <div className="cols-2">
              <CustomInput name="financial-phone1" label="Phone" />
              <CustomInput name="financial-phone2" label="Phone" />
            </div>
          </div>

          <div className="form-child ">
            <CustomInput name="financial-address" label="Bank Address" />
            <div className="cols-2">
              <CustomInput name="financial-state" label="State" />
              <CustomInput name="financial-zip-code" label="Zip Code" />
            </div>
            <CustomInput name="financial-account-name" label="Account Name" />
            <CustomInput name="financial-account-name" label="IBAN" />
          </div>
        </div>
      </div>

      {/* part 2 */}
      <div>
        <h1 className="mb-5 text-2xl font-bold lg:text-[2.125rem]">Offered Credits Terms</h1>
        <div className="form">
          <div className="form-child">
            <CustomInput type="number" name="requested-payment-terms" label="Requested Payment Terms (days)" />
          </div>
          <div className="form-child ">
            <CustomInput type="number" name="requested-credit-amount" label="Requested Credit Amount" />
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

export default Form3;
