import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingPage";
import ProductsPage from "./pages/productsPage";
import NavbarComp from "./components/navbarComp";
import RegisterPage from "./pages/registerPage";
import CartPage from "./pages/cartPage";
import HistoryPage from "./pages/historyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { keepLogin } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.reLogin();
    // this.props.getProductAction();
  }

  reLogin = () => {
    let idToken = localStorage.getItem("tkn_id");
    axios
      .get(`http://localhost:2022/users?id=${idToken}`)
      .then((res) => {
        this.props.keepLogin(res.data[0]);
      })
      .catch((err) => {
        console.log("Keeplogin error :", err);
      });
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <NavbarComp />
        <Switch>
          {/* <Route path="/" component={LandingPage} /> */}
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Route path="/register" component={RegisterPage} />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { keepLogin })(App);
