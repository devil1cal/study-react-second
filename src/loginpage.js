import React, { Component } from "react";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.name) {
      return this.setState({ error: "Username is required" });
    }

    return this.setState({ error: "" });
  }

  handleUserChange(evt) {
    this.setState({
      name: evt.target.value
    });
  }
  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          )}
          <label>Name</label>
          <input
            type="text"
            data-test="username"
            value={this.state.name}
            onChange={this.handleUserChange}
          />
          <input type="submit" value="Log In" data-test="submit" />
        </form>
      </div>
    );
  }
}
export default LoginPage;
