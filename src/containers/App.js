import React from 'react';
import Layout from "../components/Layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Checkout from "./Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "../containers/Orders/Orders";

function App() {
  return (
    <div>
        <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout" component={Checkout}/>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
