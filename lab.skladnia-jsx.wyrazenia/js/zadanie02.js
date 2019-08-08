import React from "react";
import ReactDOM from "react-dom";
import Person from "./data/person.js";

const App = function() {
    return(
        <ul>
            <li>{ Person.title }</li>
            <li>{ Person.name}</li>
            <li>{ Person.surname }</li>
            <li>{ Person.age }</li>
        </ul>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));