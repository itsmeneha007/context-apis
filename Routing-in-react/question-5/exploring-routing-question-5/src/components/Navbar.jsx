import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ fontWeight: 'bold' }}>🎬 Movie Search App</Link>
    </nav>
  );
};

export default Navbar;
