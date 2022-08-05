
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
function Menu(props) {






const guessAtPosition = (x,y) => {
  if (true) {
    console.log("You guessed X: " + Math.round(x) + " Y: " + Math.round(y))
  }

}

  return (
    <div
      className={` mt-2 bg-gray-900 rounded-md shadow-xl w-44 ${
        props.visible? "absolute" : "hidden"
      }`}
      style={{ left: props.x, top: props.y }}

    >
      <div>
        <i className="block px-4 py-2 text-sm text-white  hover:bg-gray-700 hover:text-white" onClick={() =>guessAtPosition(props.xTrue, props.yTrue)}>
          Waldo
        </i>
        <i className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white " onClick={() =>guessAtPosition(props.xTrue, props.yTrue)}>
          Wally
        </i>
        <i className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white" onClick={() =>guessAtPosition(props.xTrue, props.yTrue)}>
          Other
        </i>
      </div>
    </div>
  );
}


export default Menu;
