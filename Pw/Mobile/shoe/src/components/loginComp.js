import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { authLogin } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, angkaValid: false, abjadValid: false };
  }

  validasiPass = () => {
    let abjad = /[a-z]/i;
    let angka = /[0-9]/;

    if (this.passwordLogin.value.length > 0) {
      if (
        abjad.test(this.passwordLogin.value) &&
        angka.test(this.passwordLogin.value)
      ) {
        this.setState({ angkaValid: true, abjadValid: true });
      } else if (abjad.test(this.passwordLogin.value)) {
        this.setState({ angkaValid: false, abjadValid: true });
      } else if (angka.test(this.passwordLogin.value)) {
        this.setState({ angkaValid: true, abjadValid: false });
      }
    }
  };

  onBtnLogin = () => {
    let email = this.emailLogin.value;
    let password = this.passwordLogin.value;
    console.log("data login", email, password);
    if (
      this.state.abjadValid &&
      this.state.angkaValid &&
      this.passwordLogin.value.length > 5
    ) {
      axios
        .get(`http://localhost:2022/users?email=${email}&password=${password}`)
        .then((res) => {
          console.log("data login", res.data);
          alert("login success");
          localStorage.setItem("tkn_id", res.data[0].id);
          this.setState({ redirect: true });
          // menyimpan data ke reducer
          this.props.authLogin(res.data[0]);
        })
        .catch((err) => {
          console.log("error login", err);
        });
    } else {
      alert("Perbaiki Password");
    }
  };

  render() {
    if (this.props.id) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="col-md-6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                onChange={this.validasiPass}
                innerRef={(elemen) => (this.emailLogin = elemen)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={this.validasiPass}
                innerRef={(elemen) => (this.passwordLogin = elemen)}
              />
              {this.state.abjadValid || this.state.angkaValid ? (
                <FormText>
                  {this.state.abjadValid && "Berisi Huruf"}&nbsp;
                  {this.state.angkaValid && "Berisi Angka"}
                </FormText>
              ) : null}
            </FormGroup>
            <Button onClick={this.onBtnLogin}>Submit</Button>
          </Form>
        </div>
      );
    }
  }
}

const mapToProps = ({ authReducers }) => {
  return {
    id: authReducers.id,
  };
};

export default connect(mapToProps, { authLogin })(LoginComp);
