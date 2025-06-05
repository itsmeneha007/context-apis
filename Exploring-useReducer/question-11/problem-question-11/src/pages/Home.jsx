// const Home = () => <h2>Welcome to the Country Search App</h2>;
// export default Home;



// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Country Search App</h2>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </div>
  );
};

export default Home;
