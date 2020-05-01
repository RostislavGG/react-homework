import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = (props: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const goToRegister = () => {};

  console.log(props);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <h1>Login</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <form>
            <div className="form-group">
              <label htmlFor="userEmail">Enter your email</label>
              <input
                type="email"
                id="userEmail"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Enter your password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-block btn-primary">
              Login
            </button>
            <br />
            <Link to="/register">
              <button
                className="btn btn-block btn-secondary"
                onClick={goToRegister}
              >
                Don't have an account?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Login);
