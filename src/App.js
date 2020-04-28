import React from "react";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
    recipes: state.recipes
  };
}

export default connect(mapStateToProps)(App);
