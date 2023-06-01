import React, { useState } from "react";

export const TextField = ({
  onChange,
  value,
  label,
  name,
  type = "text",
  placeholder = "",
  ...rest
}) => {
  const [pass, setPass] = useState(true);
  const showPassword = () => {
    setPass((prev) => !prev);
  };

  const renderIcon = (pass) => (
    <i
      onClick={showPassword}
      style={{ fontSize: 24, color: "gray" }}
      className={"form-input__eye bi bi-eye" + (pass ? "-slash" : "")}
    ></i>
  );

  return (
    <div className="form-input" {...rest}>
      <label className="form-input__label">{label}</label>
      <input
        className="form-input__control"
        type={!pass ? "text" : type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
      />
      {type === "password" && renderIcon(pass)}
      <div className="form-input__error-text"></div>
    </div>
  );
};
