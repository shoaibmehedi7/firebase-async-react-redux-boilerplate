import React, { Component } from "react";
// import readux library
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import action
import { counter, signinAction } from "../actions/index";

// import react-bootstrap
import { Form, Button } from "react-bootstrap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
    this.onInputChangeEmail = this.onInputChangeEmail.bind(this);
    this.onInputChangePass = this.onInputChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onInputChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onInputChangePass(e) {
    this.setState({
      pass: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.signinAction({ email: "email", password: "fasdfs" });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input
            id="orgEmail"
            onChange={this.onInputChangeEmail}
            label="Organization Email"
            type="txt"
            placeholder="Enter Organization Email"
          />
          <input
            id="orgPass"
            onChange={this.onInputChangePass}
            label="Password"
            type="password"
            placeholder="Enter Password"
          />
          <button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
          <h1>{this.props.user}</h1>
        </form>
      </div>
    );
  }
}

//receieving point
function mapStateToProps({ number, user }) {
  return { number, user };
}

//outgoing point
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ counter, signinAction }, dispatch);
}

// connect with producer main store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
