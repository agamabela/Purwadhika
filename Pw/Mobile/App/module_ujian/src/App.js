import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { authLogin } from './action/authAction';
import  NavbarComp  from './components/navbar';
import { URLAPI } from './helper';
import CartPage from './pages/cart';
import HomePage from './pages/home';
import LoginPage from './pages/loginPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    this.reLogin()
  }

  reLogin = () => {
    axios.get(URLAPI + `/users?id=${localStorage.getItem("id_tkn")}`)
      .then(res => {
        this.props.authLogin(res.data[0])
      })
      .catch(err => {
        console.log("authLogin error :", err)
      })
  }
  render() { 
    return ( 
      <div>
      <NavbarComp/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route path ="/cart" component={CartPage}/>
      </Switch>
      </div>
     );
  }
}


 
export default connect (null,{authLogin}) (App);