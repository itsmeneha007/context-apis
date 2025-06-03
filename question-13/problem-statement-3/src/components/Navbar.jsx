import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth } = useContext(UserContext);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </nav>
  );
}

