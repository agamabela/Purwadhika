import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";
import axios from "axios";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { authLogin, getProductAction } from "../actions";

class ProductComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      qty: 1,
      isOpen: false,
      dataProduct: {},
      isOpenCart: false,
      isOpenToast: false,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    axios
      .get(`http://localhost:2022/products`)
      .then((res) => {
        this.props.getProductAction(res.data);
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log("gagal get product", err);
      });
  };

  onBtCart = (item) => {
    if (this.props.id) {
      //fungsi popup modal add to cart
      this.setState({ dataProduct: item, isOpenCart: !this.state.isOpenCart }); //isOpenCart jika user telah login
    } else {
      //popup modal
      this.setState({ isOpen: !this.state.isOpen }); //user belum login
    }
  };

  printProduct = () => {
    return this.state.data.map((item, index) => {
      return (
        <div className="col-md-4 mt-2">
          <Card>
            <CardImg top width="100%" src={item.img} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardTitle>Stock :{item.stock}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Rp. {item.price.toLocaleString()}
              </CardSubtitle>
              <CardText style={{ textAlign: "justify" }}>
                {item.description}
              </CardText>
              <div
                className="col-md-12 p-0 d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <Button
                  outline
                  color="primary"
                  onClick={() => this.onBtCart(item)}
                >
                  Add To Cart
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    });
  };

  onBtAddToCart = () => {
    if (parseInt(this.jumlah.value) > this.state.dataProduct.stock) {
      alert("Jumlah Melebihi Stock");
    } else {
      //buat kondisi untuk mengetahui barang sudah ada atau belum
      let findIdx = this.props.cart.findIndex(
        (item) => item.name == this.state.dataProduct.name
      );
      if (findIdx >= 0) {
        //Jika ada update qty
        this.props.cart[findIdx].qty += parseInt(this.jumlah.value);
        if (this.props.cart[findIdx].qty > this.state.dataProduct.stock) {
          this.props.cart[findIdx].qty -= parseInt(this.jumlah.value);
          alert("Jumlah Melebihi Stock");
        }
      } else {
        //Jika tidak ada push barang baru
        this.props.cart.push({
          name: this.state.dataProduct.name,
          img: this.state.dataProduct.img,
          qty: parseInt(this.jumlah.value),
          price: this.state.dataProduct.price,
        });
      }

      //fungsi untuk add to cart

      axios
        .patch(`http://localhost:2022/users/${this.props.id}`, {
          cart: this.props.cart,
        })
        .then((res) => {
          console.log("update cart", res.data);
          this.setState({
            isOpenCart: !this.state.isOpenCart,
            isOpenToast: !this.state.isOpenToast,
          });
          setTimeout(
            () =>
              this.setState({
                isOpenToast: !this.state.isOpenToast,
              }),
            3000
          );
          //update data cart yang ada direducer
          this.props.authLogin(res.data);
        })
        .catch((err) => {
          console.log("gagal add to cart", err);
        });
    }
  };

  render() {
    return (
      <div>
        {/* Modal Untuk user yang belum login */}
        <Modal
          isOpen={this.state.isOpen}
          toggle={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <ModalHeader>{this.state.dataProduct.name}</ModalHeader>
          <ModalBody>Silahkan Login terlebih</ModalBody>
          <ModalFooter>
            <Link to="/register" className="btn btn-outline">
              Login Sekarang
            </Link>
          </ModalFooter>
        </Modal>

        {/* Modal Untuk user yang telah login */}
        <Modal
          isOpen={this.state.isOpenCart}
          toggle={() => this.setState({ isOpen: !this.state.isOpenCart })}
        >
          <ModalHeader>{this.state.dataProduct.name}</ModalHeader>
          <ModalBody>
            Input Quantity
            <Input
              placeholder="Masukkan Quantity"
              innerRef={(e) => (this.jumlah = e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button type="button" color="info" onClick={this.onBtAddToCart}>
              Masuk Keranjang
            </Button>
          </ModalFooter>
        </Modal>
        <div
          className="container-fluid row"
          style={{ margin: "auto", marginTop: "1vh" }}
        >
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <Toast
              isOpen={this.state.isOpenToast}
              style={{ position: "absolute", zIndex: 1 }}
            >
              <ToastHeader>Sukses Add To Chart</ToastHeader>
              <ToastBody>
                Kamu Berhasil Membeli {this.state.dataProduct.name}
              </ToastBody>
            </Toast>
          </div>
          <div className="row">{this.printProduct()}</div>
        </div>
      </div>
    );
  }
}

const mapToProps = ({ productReducers, authReducers }) => {
  return {
    // stock: productReducers.products_list,
    id: authReducers.id,
    cart: authReducers.cart,
  };
};

export default connect(mapToProps, { getProductAction, authLogin })(
  ProductComp
);
