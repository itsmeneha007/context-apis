import React, { useState } from 'react';
import CollegeForm from './components/CollegeForm';
import CollegeDetails from './components/CollegeDetails';

export default function App() {
  const [submittedCollege, setSubmittedCollege] = useState(null);

  return (
    <div style={{ padding: 40 }}>
      <CollegeForm onSubmit={(data) => setSubmittedCollege(data)} />
      <CollegeDetails college={submittedCollege} />
    </div>
  );
}
