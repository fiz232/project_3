import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>ORIGAMI SHARING APP</h1>
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/loginPage">
          <div>Login</div>
        </Link>
        <Link to="/register">
          <div>Register</div>
        </Link>
        {/* <p>You are not logged in</p> */}
      </nav>
    </div>
  );
}
