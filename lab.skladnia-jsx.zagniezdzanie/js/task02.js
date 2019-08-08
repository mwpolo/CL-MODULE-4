import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";


const Card = function() {
    const table=[];
    people.forEach(function (pers) {
        table.push(
            <div className="person">
                <img src={pers.avatar}/>
                <div className="info">
                    <h1>{pers.title} {pers.name} {pers.surname}</h1>
                    <p>{pers.bio}</p>
                </div>
            </div>
        )
    })
    return table;
}

ReactDOM.render(<Card/>,document.getElementById("app"));