import React from "react";
import { Button, Alert, AlertTitle } from "@mui/material";
import BasicDatePicker from "./DatePicker";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name == "" || this.state.email == "") {
      alert("All fields are required!");
      return;
    }
    console.log(this.state);
    this.props.addContactHandle(this.state);
    this.setState({ name: "", email: "" });
  };

  render() {
    return (
      <div className="ui main" style={{ marginTop: "50px" }}>
        <h3 style={{ color: "Red" }}>Add Contact</h3>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            ></input>
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            ></input>
          </div>
          <Button variant="contained" onClick={this.add}>
            ADD
          </Button>
          {/* <BasicDatePicker></BasicDatePicker> */}
        </form>
      </div>
    );
  }
}

export default AddContact;
