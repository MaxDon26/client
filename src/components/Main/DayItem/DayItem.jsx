import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

export const DayItem = (course) => {
  const { currentUser } = useAuth();

  const isActive = course.isActive || currentUser.isActive;

  return (
    <div
      className={
        "coursesNew-block" + (isActive ? "" : " coursesNew-block--disabled")
      }
      onClick={isActive ? course.onClick : null}
    >
      <div className="coursesNew-block__img">
        <img
          style={{ objectFit: "cover", height: "100%" }}
          src={course.image}
          alt="img"
        />
      </div>
      <div className="coursesNew-block__title">
        <div>
          <div>{course.title}</div>
        </div>
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7071 8.70711C31.0976 8.31659 31.0976 7.68342 30.7071 7.2929L24.3431 0.928934C23.9526 0.53841 23.3195 0.53841 22.9289 0.928934C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM-8.74228e-08 9L30 9L30 7L8.74228e-08 7L-8.74228e-08 9Z"
            fill="#161239"
          ></path>
        </svg>
      </div>
    </div>
  );
};
