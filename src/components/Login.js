import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        const user = result.user
        form.reset();
        console.log(user)
      })
      .catch(error => {
      console.error(error)
    })

    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center mb-7">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered w-80"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-80"
                  required
                />
                <label className="label link link-hover">
                  <Link to="/register">Don't have an account?</Link>
                </label>
                <label className="label link link-hover py-0">
                  <Link to="/register">Forget password?</Link>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
