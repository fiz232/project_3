export default function RegisterPage() {
  return (
    <div>
      <h1>Please enter your details to register</h1>
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
        </form>
      </section>
    </div>
  );
}
