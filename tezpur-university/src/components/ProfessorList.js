import React from 'react';

const ProfessorList = ({ professors }) => {
  return (
    <div>
      <h2>Professors & Subjects</h2>
      <ul>
        {professors.map((prof, index) => (
          <li key={index}>
            {prof.name} - <strong>{prof.subject}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage in other components
ProfessorList.defaultProps = {
  professors: [
    { name: "Dr. John Doe", subject: "Data Structures" },
    { name: "Dr. Jane Smith", subject: "Machine Learning" },
  ],
};

export default ProfessorList;
