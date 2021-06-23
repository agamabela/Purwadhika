import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Badge,
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authLogout } from "../actions";

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    this.getSumProduct();
  }

  getSumProduct = () => {
    let barang = 0;
    this.props.cart.forEach((item) => {
      barang += item.qty;
    });
    return barang;
    // return this.props.getSumProductAction(barang);
  };

  onBtnLogout = () => {
    localStorage.removeItem("id");
    this.props.authLogout();
  };

  render() {
    console.log("sum", this.props.sum);
    if (this.props.id == false) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">SHOESAPP</NavbarBrand>
            <NavbarToggler onClick={!this.state.isOpen} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Link to="/">
                  <NavItem>
                    <NavLink>Home</NavLink>
                  </NavItem>
                </Link>
                <Link to="/cart">
                  <NavItem>
                    <NavLink>Cart</NavLink>
                  </NavItem>
                </Link>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
              {this.props.role === "user" ? (
                <>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      nav
                      caret
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Badge color="warning">{this.getSumProduct()}</Badge>
                      {this.props.email}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link to="/history">
                        <DropdownItem>History</DropdownItem>
                      </Link>
                      <DropdownItem onClick={this.onBtnLogout}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </>
              ) : (
                <Link to="/register">
                  <NavbarText>Login/Register</NavbarText>
                </Link>
              )}
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

const mapToProps = ({ authReducers, productReducers }) => {
  return {
    id: authReducers.id,
    role: authReducers.role,
    username: authReducers.username,
    email: authReducers.email,
    cart: authReducers.cart,
    sum: productReducers.sum_list,
  };
};

export default connect(mapToProps, { authLogout })(NavbarComp);
