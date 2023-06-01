import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Days from "./Days";
import "./style.css";

export const Content = ({ id }) => {
  let navigate = useNavigate();

  const renderContent = () => {
    switch (id) {
      case "day-1":
        return <Days.Day1 />;
      case "day-2":
        return <Days.Day2 />;
      case "day-3":
        return <Days.Day3 />;
      case "day-4":
        return <Days.Day4 />;
      case "day-5":
        return <Days.Day5 />;
      case "day-6":
        return <Days.Day6 />;
      case "day-7":
        return <Days.Day7 />;
      case "day-8":
        return <Days.Day8 />;
      case "day-9":
        return <Days.Day9 />;
      case "day-10":
        return <Days.Day10 />;
      default:
        navigate("/");
    }
  };

  return (
    <div className="course-contents">
      <div className="course-contents__container">
        <div className="course-contents-top-controls">
          <Link className="course-contents__back" to="/">
            <span className="course-contents__back__text">Назад</span>
          </Link>
        </div>
        <h3 className="course-contents__title">Freelance</h3>
        {renderContent()}
      </div>
    </div>
  );
};
