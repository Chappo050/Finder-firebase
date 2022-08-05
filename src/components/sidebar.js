import { TbCircleDot } from "react-icons/tb";
import { UserContext } from "../UserContext";
import { useContext } from "react";
const SideBar = () => {

    const { setState } = useContext(UserContext);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-20 m-0 pt-2
            flex flex-col bg-gray-900 text-white shadow-md gap-2"
    >
      <div className=" text-green-500 text-center border-2 border-green-500 -translate-y-2 text-xl font-extrabold">
        <h1>F</h1>
        <h1>I</h1>
        <h1>N</h1>
        <h1>D</h1>
        <h1>E</h1>
        <h1>R</h1>
      </div>
      <SideBarIcon icon={<TbCircleDot size="40" />} text="EASY" set={setState} state={1} />
      <SideBarIcon icon={<TbCircleDot size="40" />} text="MEDIUM"  set={setState}  state={2} />
      <SideBarIcon icon={<TbCircleDot size="40" />} text="HARD" set={setState}  state={3} />

    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip", set, state}) => (
  <div className="sidebar-icon group" onClick={()=>set(state)} >
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100 text-lg">{text}</span>
  </div>
);


export default SideBar;
