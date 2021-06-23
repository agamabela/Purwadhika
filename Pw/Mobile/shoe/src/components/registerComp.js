import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class RegisterComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataLogin: [] };
  }

  onBtnRegister = () => {
    var regex = /^([a-zA-Z0-9_-]){6,}$/;
    let email = this.emailRegist.value;
    let role = "user";
    let cart = [];
    let username = this.usernameRegist.value;
    let password = this.passwordRegist.value;
    let confPassword = this.confPasswordRegist.value;
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confPassword === ""
    ) {
      alert("Field Empty");
    } else {
      if (email.includes("@")) {
        if (regex.test(password) === true) {
          if (password === confPassword) {
            axios
              .post(`http://localhost:2022/users`, {
                username,
                email,
                role,
                cart,
                password,
              })
              .then((res) => {
                console.log("data login", res.data);
                alert("Register Success");
              })
              .catch((err) => {
                console.log("register error", err);
              });
          } else {
            alert("password not same");
          }
        } else {
          alert("Password need Capitalize and Number");
        }
      } else {
        alert("email not valid");
      }
    }
  };

  render() {
    return (
      <div className="col-md-6">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              innerRef={(elemen) => (this.emailRegist = elemen)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              innerRef={(elemen) => (this.usernameRegist = elemen)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              innerRef={(elemen) => (this.passwordRegist = elemen)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="confpassword"
              id="confPassword"
              innerRef={(elemen) => (this.confPasswordRegist = elemen)}
            />
          </FormGroup>
          <Button onClick={this.onBtnRegister}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default RegisterComp;
