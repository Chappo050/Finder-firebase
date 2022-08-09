import { TbCircleDot } from "react-icons/tb";
import { UserContext } from "../UserContext";
import { useContext } from "react";
const SideBar = () => {

    const { setStates } = useContext(UserContext);

  return (
    <div
      className="fixed top-0 left-0 h-screen  m-0 pt-5
            flex flex-col bg-gray-900 text-white shadow-md gap-2"
    >
      <div className=" text-green-500 text-center border-2 border-green-500 -translate-y-2 text-xl font-extrabold cursor-pointer" >
        <h1>F</h1>
        <h1>I</h1>
        <h1>N</h1>
        <h1>D</h1>
        <h1>E</h1>
        <h1>R</h1>
      </div>
      <SideBarIcon icon={<TbCircleDot size="40" />} text="EASY" set={setStates} state={1} />
      <SideBarIcon icon={<TbCircleDot size="40" />} text="MEDIUM"  set={setStates}  state={2} />
      <SideBarIcon icon={<TbCircleDot size="40" />} text="HARD" set={setStates}  state={3} />

    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip", set, state}) => (
  <div className="sidebar-icon group" onClick={()=>set({game: state, isMenuVisible: false, isMenuShowing: false})} >
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 text-lg">{text}</span>
  </div>
);


export default SideBar;
