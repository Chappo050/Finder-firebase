
import {TbCircleDot } from "react-icons/tb"

const SideBar = () => {

    return (
        <div className="fixed top-0 left-0 h-screen w-20 m-0 pt-2
            flex flex-col bg-gray-900 text-white shadow-md gap-2">
                <div className=" text-green-500 text-center shadow-lg -translate-y-2 shadow-green-400 text-xl font-extrabold">
                    <h1>F</h1>
                    <h1>I</h1>
                    <h1>N</h1>
                    <h1>D</h1>
                    <h1>E</h1>
                    <h1>R</h1>
                </div>
                <SideBarIcon  icon={<TbCircleDot size='40' />} />
                <SideBarIcon icon={<TbCircleDot size='40' />} />
                <SideBarIcon icon={<TbCircleDot size='40' />} />
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;