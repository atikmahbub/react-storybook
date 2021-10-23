import React from "react";
import "./header.css";

const Header = (props) => {
  const { variant, children, color, ...rest } = props;
  return (
    <h1 className={`${variant}`} {...rest} style={{ color: color }}>
      {children}
      <span className="bar"></span>
    </h1>
  );
};

export default Header;
