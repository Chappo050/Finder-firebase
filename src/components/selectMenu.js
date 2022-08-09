import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import db from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  addDoc,
} from "firebase/firestore";
import Leaderboard from "./leaderboard";

function Menu(props) {
  const { states, setStates } = useContext(UserContext);

  const [gameLocInfo, setGameLocInfo] = useState([]);

  const [correctCount, setCorrectCount] = useState({
    charOne: false,
    charTwo: false,
    charThree: false,
  });

  const [charInfo, setCharInfo] = useState({
    wallyX: 10,
    wallyY: 10,
    girlX: 20,
    girlY: 20,
    waldoX: 30,
    waldoY: 30,
  });

  //on game load Effect. Get the database of locations
  useEffect(() => {
    onSnapshot(collection(db, "Locations"), (snapshot) =>
      setGameLocInfo(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    const game = states.game;
    setCorrectCount({ charOne: false, charTwo: false, charThree: false });
    guessAtPosition(props.xTrue, props.yTrue, props.x, props.y, "charOne");
  }, [states.game]);

  const guessAtPosition = (xTrue, yTrue, xPec, yPec, char) => {

    setStates({
      game: states.game,
      isMenuVisible: false,
      isMenuShowing: false,
      win: false
    });

    //add server checks here
    handleGuessCheck(Math.round(xTrue), Math.round(yTrue), char);
  };

  useEffect(() => {

    if (
      correctCount.charOne === true &&
      correctCount.charTwo === true &&
      correctCount.charThree === true
    ) {

      const min = document.getElementById("timerM").textContent;
      const sec = document.getElementById("timerS").textContent;
      const mill = document.getElementById("timerMi").textContent;
      const game = states.game;
      const time = min + sec + mill;
      addScore("ASS", game, time);
      setStates({game: states.game, isMenuVisible: false, isMenuShowing: false, win: true})
    }
  }, [correctCount]);

  const extractData = (states, gameLocInfo) => {
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

    setCharInfo({
      wallyX: gameArray[0],
      wallyY: gameArray[1],
      girlX: gameArray[2],
      girlY: gameArray[3],
      waldoX: gameArray[4],
      waldoY: gameArray[5],
    });
  };

  const handleGuessCheck = (x, y, char) => {
    let xCorrect = false;
    let yCorrect = false;
    //extract Data
    extractData(states, gameLocInfo);


    //get char X and Y
    let charX = 0;
    let charY = 0;
    if (char === "charOne") {
      charX = charInfo.wallyX;
      charY = charInfo.wallyY;
    } else if (char === "charTwo") {
      charX = charInfo.girlX;
      charY = charInfo.girlY;
    } else if (char === "charThree") {
      charX = charInfo.waldoX;
      charY = charInfo.waldoY;
    }

    //check X in range
    if (x > charX - 35 && x < charX + 35) {
      xCorrect = true;
    }
    //check Y
    if (y > charY - 35 && y < charY + 35) {
      yCorrect = true;
    }
    if (xCorrect && yCorrect) {
      if (char === "charOne") {
        setCorrectCount({
          charOne: true,
          charTwo: correctCount.charTwo,
          charThree: correctCount.charThree,
        });
      } else if (char === "charTwo") {
        setCorrectCount({
          charOne: correctCount.charOne,
          charTwo: true,
          charThree: correctCount.charThree,
        });
      } else if (char === "charThree") {
        setCorrectCount({
          charOne: correctCount.charOne,
          charTwo: correctCount.charTwo,
          charThree: true,
        });
      }
    }
  };

  const addScore = async (name, game, time) => {
    addDoc(collection(db, "Leaderboard"), {
      name: name,
      game: game,
      time: time,
    });
  };

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
            guessAtPosition(
              props.xTrue,
              props.yTrue,
              props.x,
              props.y,
              "charOne"
            )
          }
        >
          WALLY
        </i>
        <i
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white "
          onClick={() =>
            guessAtPosition(
              props.xTrue,
              props.yTrue,
              props.x,
              props.y,
              "charTwo"
            )
          }
        >
          FEMALE WALLY
        </i>
        <i
          className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-white"
          onClick={() =>
            guessAtPosition(
              props.xTrue,
              props.yTrue,
              props.x,
              props.y,
              "charThree"
            )
          }
        >
          WALDO
        </i>
      </div>
    </div>
  );
}

export default Menu;
