import React  from 'react';
import {

  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
  Badge

} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { authLogout } from '../action';

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (<div>
      <Navbar color="light" light expand="md">
        <Link className="nav-brand" style={{ textDecoration: 'none', fontWeight: 'bold' }} to="/" >Simple Commerce</Link>

        <NavbarToggler />

        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/cart">Cart</NavLink>
          </NavItem>
        </Nav>

        {
          this.props.id?
          <>
          <ButtonToggle color="success">Hello, {this.props.email}<Badge color="warning">{this.props.cart.length}</Badge></ButtonToggle>
        <ButtonToggle color="success" onClick={this.props.authLogout}>Logout</ButtonToggle>
        </>
        :
        
        <Link className="nav-link" to="/login">Login</Link>
        }
      </Navbar>
    </div>);
  }
}
const mapStateToProps = ({ authReducer }) => {
  return {
    email: authReducer.email,
    id: authReducer.id,
    cart: authReducer.cart,


  }
}

export default connect(mapStateToProps, { authLogout })(NavbarComp);