import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const Dropdown = () => {
  const { logout } = useAuth();
  return (
    <div className="profile-dropdown">
      <div className="profile-dropdown__container">
        <ul className="profile-menu__dropdown profile-menu__dropdown--collapsed">
          <li className="profile-menu__item">
            <Link className="profile-menu__link" to="/">
              Главная
            </Link>
          </li>
          <li className="profile-menu__item">
            <Link className="profile-menu__link" to="/settings">
              Настройки
            </Link>
          </li>
          <li onClick={logout} className="profile-menu__item">
            Выход
          </li>
        </ul>
      </div>
    </div>
  );
};
