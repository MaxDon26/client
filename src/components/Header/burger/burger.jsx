import React from "react";
import "./style.css";

export const Burger = ({ status, ...rest }) => {
  return (
    <div
      {...rest}
      className={
        "profile-menu__burger " + (status ? "profile-menu__burger--open" : "")
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
