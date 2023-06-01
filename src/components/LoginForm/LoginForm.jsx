import React from "react";
import styled from "styled-components";
import { TextField } from "../common/textField";
import { useState } from "react";
import authService from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";

const FormWrapper = styled.div`
  background: rgb(27, 27, 27);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 43px;
  border-radius: 20px;
  padding: 40px;
  max-width: 580px;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BgElement = styled.div`
  position: absolute;
  pointer-events: none;
  background: url("/src/assets/1.png") no-repeat;
  inset: 200px 0px 0px calc(50% - 800px);
`;
const FormTitle = styled.h1`
  font-family: Doorman, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  color: gray;
  margin-bottom: 40px;
`;

const Label = styled.span`
  color: rgb(255, 255, 255);
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`;
const Submit = styled.button`
  max-width: 260px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-family: Doorman;
  font-size: 20px;
  line-height: 20px;
  background: rgb(179, 253, 57);
  border-radius: 10px;
  transition: all 0.25s ease-out 0s;
  padding: 10px 16px;
  border-width: 0px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    max-width: none;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 20px;
`;
export const LoginForm = () => {
  const { logIn, error } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data2 = await logIn(data);
  };
  return (
    <FormWrapper>
      <BgElement />
      <form onSubmit={handleSubmit}>
        <FormTitle>Вход в личный кабинет</FormTitle>
        <Label>Укажите почту и пароль</Label>
        <TextField
          style={{ paddingBottom: 10 }}
          onChange={handleChange}
          value={data.email}
          name="email"
          placeholder="E-mail"
        />
        <TextField
          style={{ paddingBottom: 10 }}
          onChange={handleChange}
          value={data.password}
          name="password"
          placeholder="Введите пароль"
        />

        <Submit type="submit">Войти</Submit>
        <Error>{error?.message}</Error>
      </form>
    </FormWrapper>
  );
};
