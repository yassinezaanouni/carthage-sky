import { Fragment } from "react";

const Container = ({ width = "1228px", children, className, As = "div" }) => {
  return (
    <As
      style={{
        width: `min(${width},90%)`,
        marginInline: "auto",
      }}
      className={className}
    >
      {children}
    </As>
  );
};

export default Container;
