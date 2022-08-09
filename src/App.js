import SideBar from "./components/sidebar";
import TopBar from "./components/topBar";
import GameScreen from "./components/gameScreen";
import { UserContext } from "./UserContext";
import { useContext, useEffect, useState } from "react";

function App() {
  const [states, setStates] = useState({game: 0, isMenuVisible: false, isMenuShowing: false});

  return (
    <UserContext.Provider value={{ states, setStates }}>

        <div className="grid flex-col auto-cols-auto h-screen pt-14  ">
          <div className=" col-start-2">
            <TopBar />
            <GameScreen />
          </div>
          <div className="col-start-1 col-span-2 w-24 justify-center text-center ">
            <SideBar />
          </div>
        </div>
    </UserContext.Provider>
  );
}

export default App;
