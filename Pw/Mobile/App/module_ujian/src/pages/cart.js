import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { URLAPI } from '../helper';


class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataUser: []
        }
    }



    printCartUser = () => {
        return this.props.cart.map((item, index) => {
            return (
               <tr>
                   <th></th>
               </tr>
            )
        })
    }

    render() {
        return (

            <div className="container">
                <div className="container row" style={{ margin: 'auto', marginTop: '3vh' }}>
                <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                
                </tbody>
              </Table>
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ authReducer }) => {
    return {
        id: authReducer.id,
        cart: authReducer.cart
    }
}

export default connect(mapStateToProps)(CartPage);