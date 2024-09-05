import React from 'react';

const ExamPapers = ({ papers }) => {
  return (
    <div>
      <h2>Past Exam Papers</h2>
      <ul>
        {papers.map((paper, index) => (
          <li key={index}>
            {paper.name} - <a href={paper.link} download>Download</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage with dynamic exam papers
ExamPapers.defaultProps = {
  papers: [
    { name: "Mid-Semester 2023 - Computer Science", link: "/papers/mid-2023-cs.pdf" },
    { name: "End-Semester 2023 - Mechanical Engineering", link: "/papers/end-2023-mech.pdf" },
  ],
};

export default ExamPapers;
