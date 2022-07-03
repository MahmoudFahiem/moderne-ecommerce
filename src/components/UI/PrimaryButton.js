import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = (props) => {
  const btnClasses =
    `btn btn-primary px-7 text-lg text-white no-underline hover:bg-black ${
      props.className || ""
    }`.trim();
  if (props.element === "link")
    return (
      <Link to={props.to || "/"} className={btnClasses}>
        {props.children}
      </Link>
    );
  return (
    <button type={props.type} className={btnClasses} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
