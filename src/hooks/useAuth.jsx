import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import httpService from "../services/httpService";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, []);

  async function getUserData() {
    try {
      const { content } = await httpService.get("/users");

      const currUser = content.find(
        (user) => localStorageService.getUserId() === user.id
      );

      setUser(currUser);
    } catch (error) {
      errorCatcher(error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  }

  async function logIn({ email, password }) {
    try {
      const data = await authService.login({
        email,
        password,
        returnSecureToken: true,
      });

      localStorageService.setTokens(data);
      setError(null);
      await getUserData();
    } catch (error) {
      errorCatcher(error);
    }
  }
  async function updatePass({ password }) {
    console.log(password);
    try {
      const data = await authService.updatePassword({
        idToken: localStorageService.getAccessToken(),
        password,
        returnSecureToken: true,
      });

      console.log(data);

      localStorageService.setTokens(data);
      setError(null);
      await getUserData();
    } catch (error) {
      errorCatcher(error);
    }
  }

  function logout() {
    localStorageService.removeAuthData();
    setUser(null);
    history.push("/");
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function errorCatcher(errors) {
    const { code, message } = errors.response.data.error;
    console.log(code, message);
    if (code === 400) {
      switch (message) {
        case "EMAIL_NOT_FOUND":
        case "INVALID_PASSWORD":
          setError({ message: "Email или пароль введены некорректно" });
          throw new Error("Email или пароль введены некорректно");

        default:
          setError({
            message: "Слишком много попыток входа. Попробуйте позже",
          });

          throw new Error("Слишком много попыток входа. Попробуйте позже");
      }
    }
  }
  // useEffect(() => {
  //   if (error !== null) {
  //
  //   }
  // }, [error]);
  return (
    <AuthContext.Provider
      value={{ logIn, logout, error, currentUser, updatePass }}
    >
      {!isLoading ? children : "Loading"}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
