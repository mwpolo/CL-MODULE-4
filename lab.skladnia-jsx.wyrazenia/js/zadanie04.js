import React from "react";
import ReactDOM from "react-dom";
import Animals from "./data/animals";

const App = function() {
 return (
     <section>
         {`Liczba zwierząt wynosi :  ${Animals.length}.     Są to :   `}
         {Animals.join(', ')}
     </section>
 )
}

ReactDOM.render(<App/>, document.getElementById("app"));