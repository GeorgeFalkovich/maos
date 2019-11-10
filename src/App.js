import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Deails from "./components/Details";
import ProductiList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Policies from "./components/Policies";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductiList} />
        <Route path="/details" component={Deails} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/policies" component={Policies} />
        <Route component={Default} />
      </Switch>
      <Modal />
      <Footer />
    </React.Fragment>
  );
}

export default App;
