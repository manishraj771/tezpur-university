import React from 'react';
import { Link } from 'react-router-dom';

// A utility function to convert the display name to URL-friendly name
const toUrlFriendly = (name) => name.toLowerCase().replace(/ /g, '-');

const DepartmentList = ({ departments }) => {
  return (
    <div>
      <h2>Departments</h2>
      <ul>
        {departments.map((department, index) => (
          <li key={index}>
            <Link to={`/department/${toUrlFriendly(department)}`}>
              {department}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// The display names of the departments
DepartmentList.defaultProps = {
  departments: ["Computer-Science", "Mechanical-Engineering", "Electrical-Engineering", "Civil-Engineering"],
};

export default DepartmentList;
