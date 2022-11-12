import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";

function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/products/:category">
            <ProductPage />
          </Route>
          <Route path="/product/:id">
            <SingleProductPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <LoginPage />}
          </Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <RegisterPage />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
