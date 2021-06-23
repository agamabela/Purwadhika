import React from "react";
import { Button, Table, Col, Badge, Input, Alert } from "reactstrap";
import { connect } from "react-redux";
import { updateCart } from "../actions";
import axios from "axios";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.cart,
      totalPayment: 0,
      name: [],
      message: "",
      display: "none",
    };
  }

  onBtPlus = (index) => {
    if (this.props.cart[index].qty < this.props.products[index].stock) {
      this.props.cart[index].qty += 1;
      this.props.updateCart([...this.props.cart]);
    } else {
      alert("Produk Habis Kamu Rakus");
    }
    //update data agar memperbaharui komponen temporary data
  };

  onBtMinus = (index) => {
    if (this.props.cart[index].qty > 1) {
      this.props.cart[index].qty -= 1;
      this.props.updateCart([...this.props.cart]);
      //update data agar memperbaharui komponen temporary data
    }
  };

  totalPayment = () => {
    let payment = 0;
    this.props.cart.forEach((element) => {
      payment += element.qty * element.price;
    });
    return payment.toLocaleString();
  };

  onBtRemoveCart = () => {
    this.props.cart.splice(0);
    axios
      .patch(`http://localhost:2022/users/${this.props.id}`, {
        cart: this.props.cart,
      })
      .then(() => {
        this.props.updateCart([...this.props.cart]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onBtCheckout = (index) => {
    console.log("isi index onbtremove", index);
    let time = new Date();
    let iduser = this.props.id;
    let username = this.props.email;
    let date =
      time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear();
    let subTotal = this.totalPayment();
    let status = "belum dibayar";

    axios
      .post(`http://localhost:2022/transaction`, {
        // cart: this.props.cart,
        iduser,
        username,
        date,
        subTotal,
        status,
      })
      .then((res) => {
        // this.props.updateCart([...this.props.cart]);
        this.onBtRemoveCart();
        if (this.props.cart.length === 0) {
          this.setState({
            display: "block",
            message: "Berhasil Melakukan Transaksi",
          });
        }
      })
      .catch((err) => {
        console.log("Error add to cart:", err);
      });
    alert("Sukses");
    //iduser,username,cart,total payment, status(paid or unpaid),total
    //userTransaction =[] // tampilkan di historyPage user, userTransaction page admin
    //setiap checkout mengurangi qty
  };

  onBtRemove = (index) => {
    this.props.cart.splice(index, 1);
    axios
      .patch(`http://localhost:2022/users/${this.props.id}`, {
        cart: this.props.cart,
      })
      .then(() => {
        this.props.updateCart([...this.props.cart]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  printResume = () => {
    return this.props.cart.map((item, index) => {
      {
        console.log("isi cartse", this.props.cart);
      }
      return (
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-md 4">
            <h6>{item.name}</h6>
          </div>
          <div className="col-md-4">
            <h6>{item.qty}</h6>
          </div>
          <div className="col-md-4">
            <h6>{this.props.cart[index].qty * item.price}</h6>
          </div>
        </div>
      );
    });
  };

  printCart = () => {
    console.log("halahe", this.state.name);
    return this.props.cart.map((item, index) => {
      console.log("cek cart isi qty", this.props.cart[index].qty);
      return (
        <div
          className="container-fluid"
          style={{ borderBottom: "1px solid black" }}
        >
          <div className="row mt-3">
            <div className="col-md-2">
              <img src={item.img} width="100%" />
            </div>
            <div className="col-md-6">
              <h5 style={{ fontWeight: "bolder" }}>{item.nama}</h5>
              <h4>{item.name}</h4>
            </div>
            <div className="col-md-4 d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center mt-2">
                <span
                  style={{
                    width: "35%",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid black",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    size="sm"
                    onClick={() => this.onBtMinus(index)}
                    outline
                    style={{ border: "none" }}
                    // disabled={!this.state.disabled}
                  >
                    <span className="material-icons">remove</span>
                  </Button>
                  <Input
                    size="sm"
                    style={{ width: "40%", display: "inline-block" }}
                    value={this.props.cart[index].qty}
                  ></Input>
                  <Button
                    size="sm"
                    onClick={() => this.onBtPlus(index)}
                    outline
                    style={{ border: "none" }}
                  >
                    <span className="material-icons">add</span>
                  </Button>
                </span>
                <h4>Rp {this.props.cart[index].qty * item.price}</h4>
              </div>
            </div>
            <div></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div style={{ float: "right" }}>
                <div className="col-md-12 d-flex mb-2">
                  <Button
                    outline
                    onClick={() => this.onBtRemove(index)}
                    className="d-flex mr-2 justify-content-center align-items-center"
                  >
                    <span className="material-icons" style={{ color: "gray" }}>
                      delete
                    </span>
                    <span>&nbsp;Hapus</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log("cek cart", this.props.cart);
    console.log("cek plus", this.props.products);
    // console.log("qty", this.props.products[0].stock[0].qty);
    return (
      <div className="container-fluid">
        <h2 className="text-center">Keranjang Belanja</h2>
        <hr style={{ borderColor: "black" }}></hr>
        <Alert color="success" style={{ display: this.state.display }}>
          {this.state.message}
        </Alert>
        <div className="mt-3">{this.printCart()}</div>

        <div className="row mt-3">
          <div className="col-md-6"></div>
          <div className="col-md-6" style={{ borderLeft: "1px solid gray" }}>
            <div className="col-md-12">
              <h1>Ringkasan</h1>
              <hr></hr>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-md 4">
                <h6>Product Name</h6>
              </div>
              <div className="col-md-4">
                <h6>Quantitiy</h6>
              </div>
              <div className="col-md-4">
                <h6>Harga</h6>
              </div>
            </div>
            <hr></hr>
            {this.printResume()}
            <hr></hr>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-md 6">
                <h5>Total termasuk pajak</h5>
              </div>
              <div className="col-md-6">
                <h4>Rp {this.totalPayment()}</h4>
              </div>
            </div>
            <hr></hr>
            <div className="col-md 12">
              <button
                type="button"
                className="btn btn-warning d-flex"
                style={{
                  width: "100%",
                  height: "5vh",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => this.onBtCheckout(this.props.id)}
              >
                <span className="material-icons">payment</span>
                &nbsp; <strong>Bayar</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("cek data", state.authReducers);
  console.log("cek produk", state.productReducers.products_list);
  return {
    user: state.authReducers,
    email: state.authReducers.email,
    cart: state.authReducers.cart,
    products: state.productReducers.products_list,
    id: state.authReducers.id,
  };
};

export default connect(mapStateToProps, { updateCart })(CartPage);
