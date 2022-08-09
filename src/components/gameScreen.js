import race from "../images/race.jpg";
import snow from "../images/snow.jpg";
import space from "../images/space.jpg";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import Board from "./board";
import Menu from "./selectMenu";

function GameScreen() {
  const { states, setStates } = useContext(UserContext);

  //mouse position stuff
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener("click", handleWindowMouseMove);

    return () => {
      window.removeEventListener("click", handleWindowMouseMove);
    };
  }, []);

  //convert the coords to a % of the window
  const handleMouseMove = (event) => {
    //including menu offset
    if (!states.isMenuShowing) {
      setStates({ game: states.game, isMenuVisible: true, isMenuShowing: true});
    }
 
  
    setCoords({
      x:
        ((event.clientX - event.target.offsetLeft) / window.innerWidth) * 100 +
        2,
      y:
        ((event.clientY - event.target.offsetTop) / window.innerHeight) * 100 +
        4,
    });
  };

  return (
    <div className="-z-10" onClick={handleMouseMove}>
      {changeGameState(states.game)}
      <div>
        <Menu
          x={coords.x + "%"}
          y={coords.y + "%"}
          xTrue={(coords.x * window.innerWidth) / 100}
          yTrue={(coords.y * window.innerHeight) / 100}
        />
      </div>
    </div>
  );
}

const changeGameState = (gameState) => {
  if (gameState === "gameOne") {
    return <Board img={snow} />;
  } else if (gameState === "gameTwo") {
    return <Board img={race} />;
  } else if (gameState === "gameThree") {
    return <Board img={space} />;
  } else {
    return (
      <div className="pt-56 text-3xl text-green-500 ">
        Please choose a game board located on the left side of the screen.
      </div>
    );
  }
};

export default GameScreen;
