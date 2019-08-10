import React from "react";
import ReactDOM from "react-dom";

import {CurrencyConverter} from "./task02";

// ReactDOM.render(<AddNumbers numberA={15} numberB={20} />, document.getElementById("app"));
ReactDOM.render(<CurrencyConverter curr1={15} rate={2} />, document.getElementById("app"));