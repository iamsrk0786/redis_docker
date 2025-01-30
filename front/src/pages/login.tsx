import React, { useState } from "react";
import { login } from "../services/user";

const Login: React.FC = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin =  () => {
    try {
      const response =  login(user); 
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
