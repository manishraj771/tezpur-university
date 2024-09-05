import React from 'react';
import { Link } from 'react-router-dom';

const BranchList = ({ departmentName, branches }) => {
  return (
    <div>
      <h2>Branches</h2>
      <ul>
        {branches.map((branch, index) => (
          <li key={index}>
            {/* Link to the branch page with the correct departmentName */}
            <Link to={`/department/${departmentName}/branch/${branch.toLowerCase().replace(' ', '-')}`}>
              {branch}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BranchList;
