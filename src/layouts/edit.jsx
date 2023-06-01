import React, { useState } from "react";
import { TextField } from "../components/common/textField";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const EditWrapper = styled.div`
  background: rgb(243, 243, 246);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const FooterWrapper = styled.div`
  background-color: rgb(255, 255, 255);
`;
export const Edit = () => {
  const [data, setData] = useState({
    new: "",
    repeat: "",
  });

  const { updatePass } = useAuth();

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.new !== data.repeat) return;
    await updatePass({
      password: data.new,
    });
    toast("Пароль обновлен!", {
      onClose: () => {
        navigate("/");
      },
      closeOnClick: true,
    });
  };

  return (
    <EditWrapper>
      <Header />
      <div className="setting-page" style={{ flexGrow: 1 }}>
        <div className="setting-page__container">
          <div>
            <h1 className="setting-page__title">
              <a className="single-course__back-link" href="/"></a>Настройки
              аккаунта
            </h1>
          </div>
          <div className="setting-page__title-wrapper">
            <div className="setting-page__mob-title">Смена пароля</div>
            <div className="setting-page__mob-sub">Заполните все поля</div>
          </div>
          <div className="form-card">
            <div className="form-card__cover form-card__cover--setting">
              <h2 className="form-card__title">Смена пароля</h2>
            </div>
            <div className="auth-form">
              <form onSubmit={handleSubmit}>
                <h3 className="auth-form__title">Заполните все поля</h3>

                <TextField
                  type="password"
                  name="new"
                  onChange={handleChange}
                  value={data.new}
                  label=" Новый пароль"
                />
                <TextField
                  type="password"
                  onChange={handleChange}
                  value={data.repeat}
                  name="repeat"
                  label=" Новый пароль еще раз"
                />

                <button className="button auth-form__button" disabled="">
                  Сменить Пароль
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </EditWrapper>
  );
};
