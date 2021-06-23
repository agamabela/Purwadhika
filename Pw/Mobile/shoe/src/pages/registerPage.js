import React from "react";
import LoginComp from "../components/loginComp";
// import RegisterComp from "../components/registerComp";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row m-2">
        <LoginComp />
        {/* <RegisterComp /> */}
      </div>
    );
  }
}

export default RegisterPage;
