import { useState, useEffect } from "react";

function Login() {
  //const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setLoggedIn(true);
    }
  }, []);

  const loginURL = "http://localhost:3004/login/";

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
        // Redirect to home page or some other page after successful login
      } else {
        console.log("Username or password is wrong");
      }
    } catch (error) {
      setError(error.message);
      console.log("Username or password is wrong");
    }
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("loggedInUser");
    setLoggedIn(false);
    console.log("User logged out");
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>You are already logged in.</h2>
          <p>
            Username:
            {JSON.parse(sessionStorage.getItem("loggedInUser")).username}
            <br />
            Id:{JSON.parse(sessionStorage.getItem("loggedInUser"))._id}
            {console.log(JSON.parse(sessionStorage.getItem("loggedInUser")))}
          </p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          {error && <div>{error}</div>}
        </form>
      )}
    </div>
  );
}

export default Login;

// export default function LoginPage() {

//   return (
//     <div>
//       <h1>Please enter your details to login</h1>
//       <section className="form-style">
//         <form onSubmit="">
//           <input
//             type="text"
//             name="name"
//             value=""
//             placeholder="Name"
//             onChange=""
//           />
//           <input
//             type="text"
//             name="email"
//             value=""
//             placeholder="Email"
//             onChange=""
//           />
//           <input
//             type="text"
//             name="password"
//             value=""
//             placeholder="Password"
//             onChange=""
//           />
//           <button type="submit">Login</button>
//         </form>
//       </section>
//     </div>
//   );
// }
