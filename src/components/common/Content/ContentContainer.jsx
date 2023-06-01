import React from "react";

export const ContentContainer = ({ children }) => {
  return (
    <div className="content">
      <div className="container">{children}</div>
    </div>
  );
};
