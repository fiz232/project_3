import { useState } from "react";
import { Link } from "react-router-dom";
import "../login.css";
import Button from "react-bootstrap/Button";

export default function RegisterPage() {
  const URL = process.env.REACT_APP_BACKEND_SIGNUP_URL;

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
      <div className="Registered">
        <h1>You are already logged in</h1>
        <br></br>
        <Link to="/">
          {" "}
          <Button variant="outline-light">Back</Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>Register</h3>
              <p>Create an account</p>
            </div>
          </div>
          <section className="form-style">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                value={newForm.username}
                placeholder="UserName"
                onChange={handleChange}
                required={true}
              />
              <input
                type="text"
                name="email"
                value={newForm.email}
                placeholder="Email"
                onChange={handleChange}
                required={true}
              />
              <input
                type="password"
                name="password"
                value={newForm.password}
                placeholder="Password"
                onChange={handleChange}
                required={true}
              />
              <button type="submit">Register</button>
              <br />
              <br />
              <p class="message">
                Already have an account? <br />
                <Link to="/loginpage">Sign in here</Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
