import React, { Component } from "react";
import Router from "next/router";

export default class index extends Component {
  componentDidMount = () => {
    Router.push("/whitePaper/introduction");
  };

  render() {
    return <div />;
  }
}

