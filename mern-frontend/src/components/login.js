import "../login.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login</p>
          </div>
        </div>
        <section className="form-style">
          <form onSubmit="">
            <input
              type="text"
              name="name"
              value=""
              placeholder="Name"
              onChange=""
            />
            <input
              type="text"
              name="email"
              value=""
              placeholder="Email"
              onChange=""
            />
            <input
              type="text"
              name="password"
              value=""
              placeholder="Password"
              onChange=""
            />
            <button type="submit">Login</button>
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
  );
}
