import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../components/context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    className="img-fluid card-img-top"
                    alt="product model"
                  />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus"></i>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div
            className="card-footer d-flex justify-content-between"
            style={{ fontSize: "1rem" }}
          >
            <p className="align-self-center mb-0 text-title">{title}</p>
            <h5 className="text-red font-italic mb-0">
              {price}
              <span className="mx-1">NIS</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    transition: 0.5s all linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: 0.5s all linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247, 0.1);
    }
  }

    .card-img-top {
      transition: all 0.4s linear;
    }

    .img-container {
      position: relative;
      overflow: hidden;
    }

    .img-container:hover .card-img-top {
      transform: scale(1.2);
    }

    .cart-btn{
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0.2rem 0.4rem;
      background: var(--mainWhite);
      border: none;
      color: var(--lightRed);
      font-size: 1.4rem;
      border-radius: 0.5rem 0 0 0;
      transform: translate(100%, 100%);
      transition: all 0.4s linear;
    }

    .img-container:hover .cart-btn{
      transform: translate(0, 0);
    }

    .cart-btn:hover {
      color: var(--mainRed);
      
      cursor: pointer;
    }
  }
`;
