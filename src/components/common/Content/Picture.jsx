import React from "react";

import styled from "styled-components";

const PictureW = styled.picture`
  margin: 0 0 20px;
  display: flex;
`;

export const Picture = ({ url }) => {
  return (
    <PictureW>
      <img src={url} alt="" />
    </PictureW>
  );
};
