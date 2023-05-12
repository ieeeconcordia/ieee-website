import { useState } from "react";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { name, email };
    let res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });
  res = await res.json();
  console.log(res)
alert("User created!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
