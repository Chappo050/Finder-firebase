import SideBar from "./components/sidebar";
import TopBar from "./components/topBar";
import GameScreen from "./components/gameScreen";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

function App() {
  const [ state, setState ] = useState(0);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div className="flex">
        <TopBar />
        <SideBar />
        <GameScreen />
      </div>
    </UserContext.Provider>
  );
}

export default App;
