import React from 'react';

export default function CollegeDetails({ college }) {
  if (!college) return null;

  return (
    <div style={{ marginTop: 30, border: '1px solid #333', padding: 20, borderRadius: 8, maxWidth: 600 }}>
      <h3>College Details</h3>
      <p>
        <strong>Name:</strong> {college.name}
      </p>
      <p>
        <strong>Establishment Year:</strong> {college.establishment_year}
      </p>

      <h4>Address:</h4>
      <p>Building: {college.address.building}</p>
      <p>Street: {college.address.street}</p>
      <p>City: {college.address.city.name}</p>
      <p>Pincode: {college.address.city.locality.pinCode}</p>
      <p>Landmark: {college.address.city.locality.landmark}</p>
      <p>State: {college.address.state}</p>
      <p>
        Coordinates: {college.address.coordinates.latitude},{' '}
        {college.address.coordinates.longitude}
      </p>

      <h4>Courses Offered:</h4>
      <ul>
        {college.courses_offered.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
