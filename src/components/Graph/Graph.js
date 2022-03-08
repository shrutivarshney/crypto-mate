import React, { Component } from "react";
import "./Graph.css";

class Graph extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://widgets.cryptocompare.com/serve/v3/coin/chart?fsym=BTC&tsyms=USD,EUR,CNY,GBP";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div ref={(el) => (this.div = el)}>{/* Script is inserted here */}</div>
    );
  }
}

export default Graph;
