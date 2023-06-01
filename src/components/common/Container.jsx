import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  padding: 0 40px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

export const Container = (props) => {
  return <ContainerWrapper {...props} />;
};
