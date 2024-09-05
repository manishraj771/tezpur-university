import React, { useState } from 'react';

const AdminPanel = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Logic to upload the file (e.g., using an API call)
      console.log('Uploading', file.name);
    } else {
      alert('Please select a file first!');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Paper</button>
    </div>
  );
};

export default AdminPanel;
