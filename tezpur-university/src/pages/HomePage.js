import React from 'react';
import DepartmentList from '../components/DepartmentList';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Tezpur University</h1>
      <p>Explore our departments, professors, and exam papers.</p>
      <DepartmentList />
    </div>
  );
};

export default HomePage;
