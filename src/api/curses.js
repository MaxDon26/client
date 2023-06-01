import curses from "./courses.json";

const updateCourse = curses.map((el, idx) => ({ ...el, id: `day-${idx + 1}` }));

export const fetchAll = () => updateCourse;

export const getById = (id) => updateCourse.find((course) => course.id === id);
