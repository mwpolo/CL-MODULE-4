import React from "react";
import ReactDOM from "react-dom";

class AddNumbers extends React.Component {
    render() {
        return (
            <div>
                {this.props.numberA + this.props.numberB}
            </div>
        )
    }
}



/**
 * Nie zmieniajcie kodu poniżej
 */
// ReactDOM.render(<App />, document.getElementById("app"));

export { AddNumbers };
