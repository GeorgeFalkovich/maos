import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#pageNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand d-none d-md-flex mx-2 text-red">
          <img src={logo} alt="logo" />
        </Link>

        <Link to="/cart" className="d-md-none ">
          <ButtonContainer>
            <i className="fas fa-cart-plus">My cart</i>
          </ButtonContainer>
        </Link>

        <div className="collapse navbar-collapse " id="pageNav">
          <ul className="navbar-nav ">
            <li className="nav-item ml-5 active ">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-item ml-5">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item ml-5">
              <Link to="/contacts" className="nav-link">
                Contacts
              </Link>
            </li>

            <li className="nav-item ml-5">
              <Link to="/policies" className="nav-link">
                Policies
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/cart" className="d-none d-md-block">
          <ButtonContainer>
            <i className="fas fa-cart-plus">My cart</i>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: var(--mainRed);
  color: var(--mainWhite);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
