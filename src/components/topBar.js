import Timer from "./timer";

const TopBar = () => {

    return (
        <div className="fixed top-0 left-0 w-screen h-12 m-0 pt-2
            flex flex-col bg-gray-900 ">
                <div className="text-green-500 text-center text-4xl -translate-y-1">
               <Timer/>
                </div>
                
        </div>
    )
};


export default TopBar;