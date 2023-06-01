import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as api from "../../api/curses";
import DaysList from "./DaysList";
import { Route, Routes, Navigate, useParams } from "react-router-dom";

import Content from "../../pages";
import { msToDay } from "../../utils/tansformDate";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const MainWrapper = styled.main`
  flex-grow: 1;
  background: rgb(79, 73, 89);
  background: linear-gradient(
    90deg,
    rgba(79, 73, 89, 1) 0%,
    rgba(165, 176, 191, 1) 35%,
    rgba(132, 153, 180, 1) 67%,
    rgba(165, 176, 191, 1) 100%
  );
`;

export const Courses = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const { currentUser } = useAuth();

  const expired = msToDay(new Date() - new Date(currentUser.created));

  useEffect(() => {
    setData(api.fetchAll());
  }, []);

  return (
    <MainWrapper>
      {expired < 3 || currentUser.isActive ? (
        id ? (
          <Content id={id} />
        ) : (
          <DaysList items={data} />
        )
      ) : (
        "Оплати"
      )}
    </MainWrapper>
  );
};
