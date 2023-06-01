import React, { useState } from "react";
import DayItem from "../DayItem";
import { useNavigate } from "react-router-dom";

export const DaysList = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div className="single-course">
      <div className="single-course__container">
        <h3 className="single-course__title">Freelance</h3>
        <div className="single-course__tiles-wrapper">
          {items &&
            items.map((course) => (
              <DayItem
                onClick={() => {
                  navigate(`/${course.id}`);
                }}
                key={course.id}
                {...course}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
