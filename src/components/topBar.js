import Timer from "./timer";
import { GiMagnifyingGlass } from "react-icons/gi";
import imgEasyOne from "../images/chars/travel-1.png";
import imgMedOne from "../images/chars/female-1.png";
import imgHardOne from "../images/chars/waldo-1.png";
import imgEasyTwo from "../images/chars/travel-2.png";
import imgMedTwo from "../images/chars/female-2.png";
import imgHardTwo from "../images/chars/waldo-2.png";
import imgEasyThree from "../images/chars/travel-3.png";
import imgMedThree from "../images/chars/female-3.png";
import imgHardThree from "../images/chars/waldo-3.png";
import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import Menu from "./selectMenu"

const TopBar = () => {
  const { states, setStates } = useContext(UserContext);
  const gameOneChars = [imgEasyOne, imgMedOne, imgHardOne];
  const gameTwoChars = [imgEasyTwo, imgMedTwo, imgHardTwo];
  const gameThreeChars = [imgEasyThree, imgMedThree, imgHardThree];
  const [chars, setChars] = useState([]);
  const [nameInput, setNameInput] = useState("ASS");

  useEffect(()=> {
   setStates({game: states.game, isMenuVisible: false, isMenuShowing: false, win: false, name: nameInput})
  }, [nameInput])

  useEffect(() => {
    const game = states.game;
    if (game === "gameOne") {
      setChars(gameOneChars);
    } else if (game === "gameTwo") {
      setChars(gameTwoChars);
    } else if (game === "gameThree") {
      setChars(gameThreeChars);
    }
  }, [states.game]);

  const handleChange = (event) => {
    setNameInput(event.target.value);
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-14 m-0 pt-2
              bg-gray-900 grid grid-cols-3 px-8 "
    >
      <div className="text-green-500 text-center text-4xl -translate-y-3 grid grid-cols-3 w-auto">
        <TopBarIcon
          icon={<GiMagnifyingGlass size="35" />}
          text="EASY"
          img={chars[0]}
        />
        <TopBarIcon
          icon={<GiMagnifyingGlass size="35" />}
          text="MEDIUM"
          img={chars[1]}
        />
        <TopBarIcon
          icon={<GiMagnifyingGlass size="35" />}
          text="HARD"
          img={chars[2]}
        />
      </div>

      <div className="m-2 justify-self-center">
        <label className="text-green-500 text-2xl  ">Name: </label>
        <input
          className="w-24 h-8 bg-gray-900 text-white text-2xl shadow-sm shadow-green-500"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={nameInput}
          maxLength={3}
        ></input>
      </div>
      <div className="text-green-500 text-center text-4xl -translate-y-1">
        <Timer />
      </div>
    </div>
  );
};

const TopBarIcon = ({ icon, text = "tooltip", img = "" }) => (
  <div className="sidebar-icon group ">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 text-lg translate-y-10  ">
      {text}
      {img ? <img className=" object-cover h-24 w-24 " src={img} /> : null}
    </span>
  </div>
);

export default TopBar;
