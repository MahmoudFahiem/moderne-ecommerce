import React from "react";

const Container = (props) => {
  const classes = `container ${props.className || ""}`.trim();
  return <div className={classes}>{props.children}</div>;
};

export default Container;
