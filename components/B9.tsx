import React, { useState } from "react";

interface User {
  email: string;
  password: string;
}

export default function B9() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  let userInfo;
  if (submitted) {
    userInfo = (
      <>
        <h4>Email: {user.email}</h4>
        <h4>Mật khẩu: {user.password}</h4>
      </>
    );
  } else {
    userInfo = (
      <>
        <h4>Email:</h4>
        <h4>Mật khẩu:</h4>
      </>
    );
  }

  return (
    <>
      <form onSubmit={register}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Nhập email"
        />{" "}
        <br /> <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
      {userInfo}
    </>
  );
}
