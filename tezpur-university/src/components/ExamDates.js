import React from 'react';

const ExamDates = ({ examDates }) => {
  return (
    <div>
      <h2>Upcoming Exam Dates</h2>
      <ul>
        {examDates.map((exam, index) => (
          <li key={index}>
            {exam.department}: {new Date(exam.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage with dynamic data
ExamDates.defaultProps = {
  examDates: [
    { department: "Computer Science", date: "2024-05-15" },
    { department: "Mechanical Engineering", date: "2024-05-17" },
  ],
};

export default ExamDates;
