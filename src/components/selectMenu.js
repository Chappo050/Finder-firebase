
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";


function Menu(props) {

  const { states, setStates } = useContext(UserContext);

  const [gameLocInfo, setGameLocInfo] = useState([]);

  //on game load Effect. Get the database of locations
  useEffect(() => {
    onSnapshot(collection(db, "Locations"), (snapshot) =>
    setGameLocInfo(snapshot.docs.map((doc) => doc.data())))
    console.log("updating");
  },[])

const guessAtPosition = (x,y) => {
    console.log("You guessed X: " + Math.round(x) + " Y: " + Math.round(y))
    setStates({ game: states.game, isMenuVisible: false, isMenuShowing: false });

    //add server checks here
    console.log(gameLocInfo);
}

  return (
    <div id="menu"
      className={` mt-2 bg-gray-900 rounded-md shadow-xl w-44 ${
        states.isMenuVisible? "absolute" : "hidden"
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
