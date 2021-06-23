import React from "react";
import ProductComp from "../components/productComp";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row m-1">
        <ProductComp />
      </div>
    );
  }
}

export default ProductsPage;
