
import {useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Leaderboard({name, game, time}) {
const [leaderboard, setLeaderboard] = useState(0)
  //on game load Effect. Get the database of locations
  useEffect(() => {
    onSnapshot(collection(db, "Leaderboard"), (snapshot) =>
      setLeaderboard(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(()=>{
addScore(name, game, time)
  },[time])

const addScore= () => {
  // Add a new document in collection "cities"
  db.collection("Leaderboard").add({
    name: name,
    game: game,
    time: time
})
}

  return (
    <div></div>
  );
}

export default Leaderboard;
