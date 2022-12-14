import { TbCircleDot } from "react-icons/tb";
import { GiPodiumWinner } from "react-icons/gi";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import learderboard from "./leaderboard"
import Leaderboard from "./leaderboard";
const SideBar = () => {

    const { states, setStates } = useContext(UserContext);

  return (
    <div
      className="fixed top-0 left-0 h-screen  m-0 pt-5
            flex flex-col bg-gray-900 text-white shadow-md gap-3 px-4"
    >
      <div className=" text-green-500 text-center border-2 border-green-500 -translate-y-2 text-xl font-extrabold cursor-pointer" >
        <h1>F</h1>
        <h1>I</h1>
        <h1>N</h1>
        <h1>D</h1>
        <h1>E</h1>
        <h1>R</h1>
      </div>
      <SideBarIcon icon={<TbCircleDot size="40" />} text="EASY" set={setStates} state={"gameOne"}   name={states.name}/>
      <SideBarIcon icon={<TbCircleDot size="40" />} text="MEDIUM"  set={setStates}  state={"gameTwo"}  name={states.name} />
      <SideBarIcon icon={<TbCircleDot size="40" />} text="HARD" set={setStates}  state={"gameThree"} name={states.name} />

      <LeaderboardIcon  icon={<GiPodiumWinner size="40" />} text="LEADERBOARD" />

    </div>
    
  );
};

const SideBarIcon = ({ icon, text = "tooltip", set, state, name}) => (
  <div className="sidebar-icon group" onClick={()=>set({game: state, isMenuVisible: false, isMenuShowing: false, win: false, name: name})} >
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 text-lg">{text}</span>
  </div>
);

const LeaderboardIcon = ({ icon, text = "tooltip" }) => (
  <div className="leaderboard-icon group" >
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 text-lg">{<Leaderboard/>}</span>
  </div>
);


export default SideBar;
