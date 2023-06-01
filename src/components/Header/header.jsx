import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../common/Container";
import Burger from "./burger";
import Dropdown from "./dropdown";
import { useAuth } from "../../hooks/useAuth";

const StyledHeader = styled.header`
  height: 60px;
  background: #87a7d0;
  border-bottom: 1px solid #87a7d0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleBurger = () => {
    setOpen((prev) => !prev);
  };
  const { currentUser } = useAuth();
  return (
    <>
      <StyledHeader>
        <div style={{ position: "relative", height: "100%" }}>
          <Container>
            <div className="profile-menu__email">{currentUser.email}</div>
            <Burger status={open} onClick={toggleBurger} />
          </Container>
          {open && <Dropdown />}
        </div>
      </StyledHeader>
    </>
  );
};
