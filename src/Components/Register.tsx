import React from "react";
import { Gender, User } from "../Redux/types";
import { generateUUID } from "../Guid";
import { connect } from "react-redux";
import { addUser } from "../Redux/UserReducer/userActions";

const Register = (props: any) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState(Gender.Other);
  const [summary, setSummary] = React.useState("");

  console.log(props);

  const addToStore = () => {
    let userId = generateUUID();
    let createdAt = new Date();

    let newUser: User = {
      id: userId,
      name: name,
      loginName: email,
      password: password,
      gender: gender,
      isAdmin: false,
      profilePic: undefined,
      description: summary,
      registerDate: createdAt,
      lastChangeDate: undefined
    };

    props.dispatch(addUser(newUser));
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1>Register your account</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <form>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
            </div>
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
            <div className="form-group">
              <label htmlFor="radios">Gender: </label>
              <div className="d-flex justify-content-between" id="radios">
                <label className="radio">
                  <input
                    type="radio"
                    name="optradio"
                    onClick={() => setGender(Gender.Male)}
                  />
                  {" Male"}
                </label>
                <br />
                <label className="radio">
                  <input
                    type="radio"
                    name="optradio"
                    onClick={() => setGender(Gender.Female)}
                  />
                  {" Female"}
                </label>
                <br />
                <label className="radio">
                  <input
                    type="radio"
                    name="optradio"
                    defaultChecked
                    onClick={() => setGender(Gender.Other)}
                  />
                  {" Other"}
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="summary">
                Write a short summary about yourself
              </label>
              <textarea
                className="form-control"
                id="summary"
                value={summary}
                onChange={e => setSummary(e.target.value)}
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-block btn-primary"
              onClick={() => addToStore}
            >
              Register
            </button>
          </form>
        </div>
        <div className="col-5"></div>
      </div>
    </div>
  );
};

export default connect()(Register);
