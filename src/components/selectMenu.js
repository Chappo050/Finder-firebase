import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Menu(props) {
  const { states, setStates } = useContext(UserContext);

  const [gameLocInfo, setGameLocInfo] = useState([]);

  const [charInfo, setCharInfo] = useState({testx: 10, testy: 10, testxx: 20, testyy:20, testxxx: 30, testyyy: 30 })

  //on game load Effect. Get the database of locations
  useEffect(() => {
    onSnapshot(collection(db, "Locations"), (snapshot) =>
      setGameLocInfo(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  
  const guessAtPosition = (xTrue, yTrue, xPec, yPec, char) => {
    console.log(
      "You guessed X: " + Math.round(xTrue) + " Y: " + Math.round(yTrue)
    );
    setStates({
      game: states.game,
      isMenuVisible: false,
      isMenuShowing: false,
    });

    //add server checks here
    handleGuessCheck(Math.round(xPec), Math.round(yPec), char);
  };


  const extractData=(states, gameLocInfo) => {
    const gameBoard = states.game;
    let gameArray = gameLocInfo;
    gameArray.forEach((element) => {
      if (gameBoard === "gameOne") {
        gameArray = element.gameOne;
      } else if (gameBoard === "gameTwo") {
        gameArray = element.gameTwo;
      } else if (gameBoard === "gameThree") {
        gameArray = element.gameThree;
      } else {
        console.log("error parsing Data");
      }
    });
    console.log(gameArray);;

    setCharInfo({testx:  gameArray[0], testy: gameArray[1], testxx: gameArray[2], testyy:gameArray[3], testxxx: gameArray[4], testyyy: gameArray[5] })
  }


  const handleGuessCheck = (x, y, char) => {
    let xCorrect = false;
    let yCorrect = false;
    //extract Data
    extractData(states, gameLocInfo);
    console.log(x + "  " + y);

    //get char X and Y
    let charX = 0;
    let charY = 0;
    if (char === "wally") {
      charX = charInfo.testx
      charY = charInfo.testy
    } else if (char === "waldo") {
      charX = charInfo.testxx
      charY = charInfo.testyy
    } else if (char === "other") {
      charX = charInfo.testxxx
      charY = charInfo.testyyy
    }

    //check X in range
    if (x > charX - 5 && x < charX +5 ) {
      xCorrect = true
    }
    //check Y
    if (y > charY - 5 && y < charY +5) {
      yCorrect = true
    }
    if (xCorrect && yCorrect) {
      console.log("YOU FOUND HIM!");
      //cross char off logic
    }
}



  return (
    <div
      id="menu"
      className={` mt-2 bg-gray-900 rounded-md shadow-xl w-44 ${
        states.isMenuVisible ? "absolute" : "hidden"
      }`}
      style={{ left: props.x + "%", top: props.y + "%" }}
    >
      <div>
        <i
          className="block px-4 py-2 text-sm text-white  hover:bg-gray-700 hover:text-white"
          onClick={() =>
            guessAtPosition(props.xTrue, props.yTrue, props.x, props.y, "wally")
          }
        >
          Wally
        </i>
        <i
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white "
          onClick={() =>
            guessAtPosition(props.xTrue, props.yTrue, props.x, props.y, "waldo")
          }
        >
          Waldo
        </i>
        <i
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
          onClick={() =>
            guessAtPosition(props.xTrue, props.yTrue, props.x, props.y, "other")
          }
        >
          Other
        </i>
      </div>
    </div>
  );
}

export default Menu;


