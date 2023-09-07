import React from "react";

function Course({ name, courseId, studentPositions }) {
  return (
    <div className="course">
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
}

export default Course;
