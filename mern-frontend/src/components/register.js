import { useState } from "react";

export default function RegisterPage() {
  const URL = "http://localhost:3004/signup/";

  //const [newUser, setNewUser] = useState("");

  //POST|Create
  const createUser = async (newUser) => {
    console.log("new user :" + newUser);
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    //update list of origami
    //getOrigami();
  };

  const [newForm, setNewForm] = useState({
    username: "",
    email: "",
    password: "",
  }); //initial newForm state

  //this is to allow to type in input fields using states
  const handleChange = (event) => {
    const value = { ...newForm, [event.target.name]: event.target.value };
    setNewForm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(newForm);
    setNewForm({
      username: "",
      email: "",
      password: "",
    });
  };

  if (sessionStorage.getItem("loggedInUser") != null) {
    return (
      <div>
        <h1>You are already logged in</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please enter your details to register</h1>
        <section className="form-style">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={newForm.username}
              placeholder="UserName"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={newForm.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              value={newForm.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <button type="submit">Register</button>
          </form>
        </section>
      </div>
    );
  }
}
