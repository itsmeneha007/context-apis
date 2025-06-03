import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Main() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <main style={{ padding: "20px" }}>
      {isLoggedIn ? (
        <h2>Welcome back, you are logged in!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}
    </main>
  );
}