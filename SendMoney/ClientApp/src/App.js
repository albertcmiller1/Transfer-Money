import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { SendMoney } from "./components/SendMoney";
import { Payee } from "./components/Payee";

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);

    this.state = {
      GotData: []
    };

    fetch("api/payee/get")
      .then(d => {
        console.log("Fetch worked!:", d);
        return d.json();
      })
      .then(data => {
        this.setState({ GotData: data });
        console.log("GotData: ", data);
      });
  }

  payeeAdded2 = newPayees2 => {
    this.setState({
      GotData: newPayees2
    });
  };

  //why wont this work? it apparently needs to be an arrow function.
  /*payeeAdded2(newPayees2) {
        console.log("get payees", newPayees2);
        this.setState({
            GotData: newPayees2
        });
    }*/

  /*render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sendmoney' component={SendMoney} Data={this.state.GotData}/>
        <Route path='/payee' component={Payee} Data={this.state.GotData} payeeAdded2={this.payeeAdded2}/>
      </Layout>
    );
    }*/

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route
          path="/sendmoney"
          render={routeProps => (
            <SendMoney {...routeProps} Data={this.state.GotData} />
          )}
        />
        <Route
          path="/payee"
          render={routeProps => (
            <Payee
              {...routeProps}
              payeeAdded2={this.payeeAdded2}
              Data={this.state.GotData}
            />
          )}
        />
      </Layout>
    );
  }
}
