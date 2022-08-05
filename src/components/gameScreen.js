
import race from "../images/race.jpg";
import snow from "../images/snow.jpg";
import space from "../images/space.jpg";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import Board from "./board";

function GameScreen() {

    const { state } = useContext(UserContext);
  

    return (
      <div className="flex">
            {changeGameState(state)}
      </div>
    );
  }

const changeGameState = ( gameState ) => {
  if (gameState === 1) {
    console.log("snow");
    return <Board img={snow} />;
  } else if (gameState === 2) {
    console.log("race");
    return <Board img={race} />;
  } else if (gameState === 3) {
    console.log("space");
    return <Board img={space} />;
  } else {
    return (
      <div className="flex justify-center text-center h-auto w-auto p-10 pt-56 translate-x-1/2 text-3xl text-green-500 ">
        Please choose a game board located on the left side of the screen.
      </div>
    );
  }
};

export default GameScreen;
