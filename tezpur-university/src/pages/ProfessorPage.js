import React from 'react';
import { useParams } from 'react-router-dom';
import { professorsData } from '../data/professorsData'; // Import the data

const ProfessorPage = () => {
  const { departmentName, branchName, professorId } = useParams(); // Get department, branch, and professor from URL
  const professors = professorsData[departmentName]?.[branchName.toLowerCase()] || [];
  const professor = professors.find(prof => prof.id === professorId);

  if (!professor) {
    return <p>Professor not found for this branch.</p>;
  }

  return (
    <div>
      <h1>{professor.name}</h1>
      <h2>Subjects in {branchName.replace('-', ' ').toUpperCase()}</h2>
      <ul>
        {professor.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfessorPage;
