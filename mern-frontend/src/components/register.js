import "../login.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
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
            <button type="submit">Register</button>
            <br />
            <br />
            <p class="message">
              Already have an account? <br />
              <Link to="/login">Sign in here</Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
