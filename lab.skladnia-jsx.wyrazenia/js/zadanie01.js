import React from "react";
import ReactDOM from "react-dom";

const App = function() {
    const birthYear = prompt( "Podaj rok urodzenia");
    const currentYear = new Date().getFullYear();
    return (
        <h1> { `Twój wiek to ${currentYear - parseInt(birthYear)}`} </h1>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
