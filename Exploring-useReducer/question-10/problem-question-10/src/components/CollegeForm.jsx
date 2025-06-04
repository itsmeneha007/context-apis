import React, { useReducer, useState } from 'react';
import { collegeFormReducer, initialState } from '../reducers/collegeFormReducer';

export default function CollegeForm({ onSubmit }) {
  const [state, dispatch] = useReducer(collegeFormReducer, initialState);
  const [courseInput, setCourseInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      onSubmit(state);
      dispatch({ type: 'RESET' });
      setError(null);
      setCourseInput('');
    } catch (err) {
      setError(err.message);
    }
  };

  const addCourse = () => {
    if (courseInput.trim() === '') return;
    dispatch({ type: 'ADD_COURSE', payload: courseInput.trim() });
    setCourseInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: 20, borderRadius: 8, maxWidth: 600 }}>
      <h2>Add College</h2>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      <label>
        College Name:
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          required
        />
      </label>

      <label>
        Establishment Year:
        <input
          type="number"
          value={state.establishment_year}
          onChange={(e) => dispatch({ type: 'SET_ESTABLISHMENT_YEAR', payload: e.target.value })}
          required
        />
      </label>

      <fieldset style={{ marginTop: 20 }}>
        <legend>Address Details</legend>

        <label>
          Building:
          <input
            type="text"
            value={state.address.building}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_BUILDING', payload: e.target.value })}
          />
        </label>

        <label>
          Street:
          <input
            type="text"
            value={state.address.street}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_STREET', payload: e.target.value })}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            value={state.address.city.name}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_CITY_NAME', payload: e.target.value })}
          />
        </label>

        <label>
          Pincode:
          <input
            type="text"
            value={state.address.city.locality.pinCode}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_LOCALITY_PINCODE', payload: e.target.value })}
          />
        </label>

        <label>
          Landmark:
          <input
            type="text"
            value={state.address.city.locality.landmark}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_LOCALITY_LANDMARK', payload: e.target.value })}
          />
        </label>

        <label>
          State:
          <input
            type="text"
            value={state.address.state}
            onChange={(e) => dispatch({ type: 'SET_ADDRESS_STATE', payload: e.target.value })}
          />
        </label>

        <label>
          Latitude:
          <input
            type="text"
            value={state.address.coordinates.latitude}
            onChange={(e) => dispatch({ type: 'SET_COORDINATES_LATITUDE', payload: e.target.value })}
          />
        </label>

        <label>
          Longitude:
          <input
            type="text"
            value={state.address.coordinates.longitude}
            onChange={(e) => dispatch({ type: 'SET_COORDINATES_LONGITUDE', payload: e.target.value })}
          />
        </label>
      </fieldset>

      <fieldset style={{ marginTop: 20 }}>
        <legend>Courses Offered</legend>
        <input
          type="text"
          value={courseInput}
          onChange={(e) => setCourseInput(e.target.value)}
          placeholder="Enter course name"
        />
        <button type="button" onClick={addCourse}>
          Add Course
        </button>

        <ul>
          {state.courses_offered.map((course, idx) => (
            <li key={idx}>
              {course}{' '}
              <button type="button" onClick={() => dispatch({ type: 'REMOVE_COURSE', payload: idx })}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      <button type="submit" style={{ marginTop: 20 }}>
        Submit
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'RESET' });
          setCourseInput('');
          setError(null);
        }}
        style={{ marginLeft: 10, marginTop: 20 }}
      >
        Reset
      </button>
    </form>
  );
}
