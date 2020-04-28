import React from "react";

export const Register = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1>Register your account</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5">
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Passowrd</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={e => setPassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-block btn-primary">
              Register
            </button>
          </form>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};
