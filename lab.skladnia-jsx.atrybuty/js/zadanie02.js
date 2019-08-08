import React from "react";
import ReactDOM from "react-dom";


const inputBorderColor = prompt("Podaj kolor ramki");

const Choice = function() {
  if (inputBorderColor === "red" || inputBorderColor === "green" || inputBorderColor === "blue") {
    console.log("jestem tu");

    const divStyle = {
      width: "100px",
      height: "100px",
      borderWidth: "5px",
      borderStyle: "solid",
      borderColor: inputBorderColor
    }
    return  <div style={divStyle}></div> ;
  } else {
    return <div style={{fontSize: "16px"}}>"Nieprawidłowy kolor"</div>;
  }
}
ReactDOM.render(<Choice/>, document.getElementById("app"));

/**
 * Nie modyfikujcie kodu powyżej!
 */


/**
 * Nie modyfikujcie kodu poniżej!
 */
// ReactDOM.render(
//   <div>
//     {redDiv}
//     {greenDiv}
//     {blueDiv}
//   </div>,
//   document.getElementById("app")
// );
//
// export { Test, redDiv, greenDiv, blueDiv };
