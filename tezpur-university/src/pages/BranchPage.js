import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { professorsData } from '../data/professorsData'; // Import the data

const BranchPage = () => {
  const { departmentName, branchName } = useParams(); // Get department and branch from URL

  console.log('Department:', departmentName); // Debugging logs
  console.log('Branch:', branchName);

  // Find the professors for the specific department and branch
  const professors = professorsData[departmentName]?.[branchName.toLowerCase()] || [];

  console.log('Professors:', professors);

  return (
    <div>
      <h1>{branchName?.replace('-', ' ').toUpperCase()} in {departmentName?.replace('-', ' ').toUpperCase()}</h1>
      <h2>Professors</h2>
      {professors.length === 0 ? (
        <p>No professors available for this branch.</p>
      ) : (
        <ul>
          {professors.map((professor, index) => (
            <li key={index}>
              {/* Link to the professor's page */}
              <Link to={`/department/${departmentName}/branch/${branchName}/professors/${professor.id}`}>
                {professor.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BranchPage;
