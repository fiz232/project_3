import { useState, useEffect } from "react";
import "../login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Login() {
  //const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setLoggedIn(true);
    }
  }, []);

  const loginURL = process.env.REACT_APP_BACKEND_LOGIN_URL;

  const handleLogin = async (e) => {
    e.preventDefault(); //prevents defaulting to get request
    try {
      const response = await fetch(loginURL, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        sessionStorage.setItem("loggedInUser", JSON.stringify(data));
        setLoggedIn(true);
        console.log("User logged in");
        navigate("/");
        // Redirect to home page or some other page after successful login
      } else {
        console.log("Username or password is wrong");
      }
    } catch (error) {
      setError(error.message);
      //setError("Username or password is wrong");
      console.log("Username or password is wrong");
    }
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedIn(false);

    console.log("User logged out");
    navigate("/");
  };

  return (
    <div>
      {loggedIn ? (
        <div className="loggedIn">
          <h2>You are already logged in.</h2>
          <br></br>
          <p>
            Username:{" "}
            {JSON.parse(sessionStorage.getItem("loggedInUser")).username}
            <br />
            Email: {JSON.parse(sessionStorage.getItem("loggedInUser")).email}
            {console.log(JSON.parse(sessionStorage.getItem("loggedInUser")))}
          </p>
          <Button variant="outline-light" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      ) : (
        <div class="login-page">
          <div class="form">
            <div class="login">
              <div class="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login</p>
              </div>
            </div>
            <section className="form-style">
              <form onSubmit={handleLogin}>
                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    placeholder="UserName"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                <br />
                <button type="submit">Login</button>
                {error && <div>{error}</div>}
                <br />
                <br />
                <p class="message">
                  Not registered? <br />
                  <Link to="/register">Sign up here</Link>
                </p>
              </form>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
