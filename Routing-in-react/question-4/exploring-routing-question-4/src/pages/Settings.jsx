import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Settings = () => {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    alert('User updated!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Update Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label><br />
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Settings;
