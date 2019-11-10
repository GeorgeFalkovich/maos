import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "./context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="text-title text-center" style={{fontSize:'2rem'}}> Welcome to <span className="text-red">MAOS</span> Store</div>
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {v => {
                  return v.products.map(p => {
                    return <Product key={p.id} product={p} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
