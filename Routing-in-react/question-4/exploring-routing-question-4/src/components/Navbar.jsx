import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/profile" style={{ margin: '0 10px' }}>Profile</Link>
      <Link to="/settings" style={{ margin: '0 10px' }}>Settings</Link>
    </nav>
  );
};

export default Navbar;
