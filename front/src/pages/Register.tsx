import React, { useState } from "react";
import { register } from "../services/user";

const Register: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleregister =  () => {
    try {
      const response =  register(user); // Assuming this is a service function
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
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
      <button onClick={handleregister}>Register</button>
    </div>
  );
};

export default Register;
