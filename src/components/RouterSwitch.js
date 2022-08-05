import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { useEffect, useState } from "react";
import db from "./firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const RouteSwitch = () => {

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) =>
    setUserInfo(snapshot.docs.map((doc) => doc.data())))
  },[])

  
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <BrowserRouter basename="/finder/">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default RouteSwitch;
