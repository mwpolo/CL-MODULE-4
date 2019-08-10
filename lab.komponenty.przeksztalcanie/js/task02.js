import React from "react";
import ReactDOM from "react-dom";

class CurrencyConverter extends React.Component {
  render() {
      return(
          <>
              <span>Ilość waluty pierwszej = {this.props.curr1}</span><br/>
              <span>Stosunek waluty pierwszej  / drugiej = {this.props.rate}</span><br/>
              <span>Ilość waluty drugiej = {this.props.curr1 / this.props.rate}</span>
          </>
      )
  }
}



/**
 * Nie zmieniajcie kodu poniżej
 */
// ReactDOM.render(<App />, document.getElementById("app"));

export { CurrencyConverter};
