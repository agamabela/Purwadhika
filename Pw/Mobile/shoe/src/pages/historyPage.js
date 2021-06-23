import React from "react";
import axios from "axios";
import { Button, Table, Badge, Input } from "reactstrap";
import { connect } from "react-redux";
import { getProductAction, getTransAction } from "../actions";

let kursor = {
  cursor: "pointer",
  marginRight: "0.5vw",
};

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail: 0,
      detailProduk: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let history = [];
    axios
      .get(`http://localhost:2022/transaction`)
      .then((res) => {
        this.props.getTransAction(res.data);
        this.res.data.map((item, idx) => {
          if (item.iduser == this.props.id) {
            history.push(item.iduser);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onBtRemoveCart = (idx) => {
    // let transaction = this.props.trans.splice(0);
    axios
      .delete(`http://localhost:2022/transaction/${this.props.trans[idx].id}`)
      .then((res) => {
        // this.props.getTransAction(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  printProduk = () => {
    return this.props.trans.map((item, index) => {
      if (item.iduser == this.props.id) {
        return (
          <tr>
            <td>{item.iduser}</td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>{item.subTotal}</td>
            <td>
              <Button type="button" size="sm" color="warning">
                {item.status}
              </Button>
              &nbsp;
              <Button
                type="button"
                size="sm"
                color="danger"
                onClick={() => this.onBtRemoveCart(index)}
              >
                Cancel
              </Button>
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    console.log("iduser", this.state.data);
    console.log("id trans", this.props.trans[0]);
    return (
      <div className="container">
        <h3 className="text-center">History</h3>
        <Table>
          <thead>
            <tr>
              <th>Id User</th>
              <th>Email</th>
              <th>Date</th>
              <th>Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.printProduk()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapToProps = ({ productReducers, authReducers }) => {
  return {
    products: productReducers.products_list,
    id: authReducers.id,
    trans: productReducers.transaction_list,
  };
};

export default connect(mapToProps, { getProductAction, getTransAction })(
  HistoryPage
);
