import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DepartmentPage from './pages/DepartmentPage';

import BranchPage from './pages/BranchPage';
import ProfessorPage from './pages/ProfessorPage';
import ExamPapers from './components/ExamPapers';
import AdminPanel from './components/AdminPanel';
import ExamDates from './components/ExamDates';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/department/:departmentName/branch/:branchName" element={<BranchPage />} />
          <Route path="/department/:departmentName/branch/:branchName/professors" element={<ProfessorPage />} />
          <Route path="/exam-papers" element={<ExamPapers />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/exam-dates" element={<ExamDates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
