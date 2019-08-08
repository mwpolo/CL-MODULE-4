import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

const DataPerson = function() {
    return (
        <React.Fragment>
            <h1>{person.title} {person.name} {person.surname} </h1>
            <span> {person.age} </span>
        </React.Fragment>
    );
};

ReactDOM.render(<DataPerson/>, document.getElementById("app"));