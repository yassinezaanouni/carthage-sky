import React, { useState } from "react";
import FinalStep from "./FinalStep";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";

const InquiryPage = () => {
  const [state, setState] = useState(1);
  const [info, setInfo] = useState({});
  return (
    <section className="container mt-[10.6875rem]">
      <>
        {/* {state <= 5 && <TopBar state={state} className="mb-[89px]" />} */}
        {state === 1 && (
          <Form1 state={state} setState={setState} setInfo={setInfo} />
        )}
        {state === 2 && (
          <Form2 state={state} setState={setState} setInfo={setInfo} />
        )}
        {state === 3 && (
          <Form3 state={state} setState={setState} setInfo={setInfo} />
        )}
        {state === 4 && (
          <Form4 state={state} setState={setState} setInfo={setInfo} />
        )}
        {state === 5 && (
          <Form5 state={state} setState={setState} setInfo={setInfo} />
        )}
        {state === 6 && <FinalStep />}
      </>
    </section>
  );
};

export default InquiryPage;
