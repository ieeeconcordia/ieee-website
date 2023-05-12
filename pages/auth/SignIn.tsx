import React, { useState } from "react";
import { useRouter } from "next/router";
import authenticateUser from "@/utils/authenticateUsers";

export default function SignIn() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const user = await authenticateUser(email, password);

    if (user) {
      // redirect to dashboard page
      router.push("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Sign In</button>
  </form>
  )
}


