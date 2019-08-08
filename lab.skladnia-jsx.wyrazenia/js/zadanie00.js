import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = function() {
    const number1 = prompt("Podaj pierwszą liczbę");
    const number2 = prompt("Podaj drugą liczbę");
    return (
        <div> {` Wynik dodawania wynosi :${parseInt(number1) + parseInt(number2)}`}</div>
    )
}
ReactDOM.render(<App/>, document.getElementById("app"));