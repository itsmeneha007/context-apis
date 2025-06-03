import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Footer() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <footer style={{ padding: "10px", borderTop: "1px solid #ccc" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
}
