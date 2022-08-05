import SideBar from "./components/sidebar";
import TopBar from "./components/topBar";
import GameScreen from "./components/gameScreen";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

function App() {
  const [state, setState] = useState(0);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div className="grid flex-col auto-cols-auto ">
        <div className="col-start-2">
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
