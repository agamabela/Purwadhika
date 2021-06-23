import axios from 'axios';
import React from 'react';
import { URLAPI } from '../helper';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Modal, ModalBody, ModalFooter, Input, ModalHeader, CardText, Toast, ToastBody,ToastHeader
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { authLogin } from '../action'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isOpen: false,
            dataProduct: {},
            isOpenCart: false,
            isToast:false
        }
    }



    componentDidMount() {
        this.getProduct()
    }
    getProduct = () => {
        axios.get(URLAPI + `/products`)
            .then(res => {
                console.log("getproduk", res.data)
                this.setState({ data: res.data })


            }).catch(err => {
                console.log("error produk", err)
            })
    }

    btnCart = (item) => {
        if (this.props.id) {
            //fungsi pop up modal add to cart
            this.setState({ dataProduct: item, isOpenCart: !this.state.isOpenCart })
        } else {
            //pop up modal
            this.setState({ isOpen: !this.state.isOpen })
        }

    }

    addToCart = () => {
        if (parseInt(this.inpQty.value) > this.state.dataProduct.stock) {
            alert("Jumlah melebihi stock")
        } else {
            //fungsi untuk add cart
            //buat kondisi untuk mengetahui barang sudah ada atau blm
            let findIdx = this.props.cart.findIndex(item => item.name == this.state.dataProduct.name)
            if (findIdx >= 0) {
                this.props.cart[findIdx].qty += parseInt(this.inpQty.value)
                //kondisi stock tidak mencukupi
               
            } else {
                this.props.cart.push({
                    name: this.state.dataProduct.name,
                    img: this.state.dataProduct.img,
                    qty: parseInt(this.inpQty.value)
                })
            }
            if (findIdx&&this.props.cart[findIdx].qty > this.state.dataProduct.stock) {

                this.props.cart[findIdx].qty -= parseInt(this.inpQty.value)
                alert("Jumlah melebihi stock")
            }else{
                axios.patch(URLAPI + `/users/${this.props.id}`, { cart: this.props.cart })
                .then(res => {
                    this.setState({ isOpenCart: !this.state.isOpenCart })
                    //update cart yang ada direducers dengan login ulang
                    this.props.authLogin(res.data)
                    this.setState({isToast:!this.state.isToast},()=>{
                        setTimeout(()=>this.setState({isToast:!this.state.isToast,dataProduct:{}}),3000)
                    })
                }).catch(err => {
                    console.log("error add to cart", err)
                })
            }

        
        }

    }

    printProducts = () => {
        return this.state.data.map((item, index) => {
            return <div className="col-md-3 mt-2">
                <Card style={{ height: "40vh" }}>
                    <CardBody style={{ height: '55%', flex: 1 }} >
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardText>Jumlah: {item.stock}</CardText>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Rp. {item.price.toLocaleString()}</CardSubtitle>
                        <CardImg src={item.img} />
                        <Button onClick={() => this.btnCart(item)}>Add to cart</Button>
                    </CardBody>
                </Card>
            </div>

        })
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={() => this.setState({ isOpen: !this.state.isOpen })}>
                    <ModalBody>
                        Silahkan login terlebih dahulu
                    </ModalBody>
                    <ModalFooter>
                        <Link to="/login" className="btn-primary btn-outline btn-sm">
                            Login sekarang!
                        </Link>
                    </ModalFooter>

                </Modal>
                <Modal isOpen={this.state.isOpenCart} toggle={() => this.setState({ isOpenCart: !this.state.isOpenCart })}>
                    <ModalHeader>
                        {this.state.dataProduct.name}
                    </ModalHeader>
                    <ModalBody>

                        <Input placeholder="masukan jumlah" innerRef={el => this.inpQty = el} />
                    </ModalBody>
                    <ModalFooter>
                        <Button type="button" outline color="info" onClick={this.addToCart}>
                            Masuk keranjang
                       </Button>
                    </ModalFooter>

                </Modal>
               
                    <Toast isOpen={this.state.isToast}>
                        <ToastHeader icon="sucsess">
                            Add to Cart
          </ToastHeader>
                        <ToastBody>
                           berhasil menambahkan {this.state.dataProduct.name} ke cart
          </ToastBody>
                    </Toast>
                
                <div className="container row" style={{ margin: 'auto', marginTop: '3vh' }}>
                    {this.printProducts()}
                </div>
            </div>
        );
    }
}
const mapToProps = ({ authReducer }) => {
    return {
        id: authReducer.id,
        cart: authReducer.cart
    }
}

export default connect(mapToProps, { authLogin })(HomePage);