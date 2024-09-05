import React from 'react';
import { useParams } from 'react-router-dom';
import BranchList from '../components/BranchList';

// Example branches for each department
const departmentBranches = {
  "computer-science": ["BTech", "MTech"],
  "mechanical-engineering": ["BTech", "MTech"]
};

const DepartmentPage = () => {
  const { departmentName } = useParams(); // Get departmentName from URL

  console.log("Department Name:", departmentName); // Add this for debugging

  const branches = departmentBranches[departmentName?.toLowerCase()] || []; // Get branches for department

  return (
    <div>
      <h1>{departmentName?.replace('-', ' ').toUpperCase()} Department</h1>
      <BranchList departmentName={departmentName} branches={branches} /> {/* Pass departmentName */}
    </div>
  );
};

export default DepartmentPage;
