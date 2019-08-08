import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = function() {
    let effect;
    const number1 = prompt("Podaj pierwszą liczbę");
    const number2 = prompt("Podaj drugą liczbę");
    const mark = prompt("Jakie wykoać działanie? Podaj znak  +  -  *  /")
    if (mark == "+") {
        effect =  <h1>{` Wynik dodawania wynosi :  ${parseInt(number1) + parseInt(number2)}`}</h1>
    } else if (mark == "-") {
        effect = <h2>{` Wynik odejmowania wynosi :  ${parseInt(number1) - parseInt(number2)}`}</h2>
    } else if (mark == "*") {
        effect = <h3>{` Wynik mnożenia wynosi :  ${parseInt(number1) * parseInt(number2)}`}</h3>
    } else if (mark == "/") {
        effect = <h4>{` Wynik dzielenia wynosi :  ${parseInt(number1) / parseInt(number2)}`}</h4>
    }

    return effect;
}
ReactDOM.render(<App/>, document.getElementById("app"));