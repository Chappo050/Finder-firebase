import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Leaderboard() {
  const { states } = useContext(UserContext);
  const [leaderboard, setLeaderboard] = useState(0);
  const [leaders, setLeaders] = useState({ Name: [1, 2], Time: [1, 2] });
  //on game load Effect. Get the database of locations
  useEffect(() => {
    onSnapshot(collection(db, "Leaderboard"), (snapshot) =>
      setLeaderboard(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  useEffect(() => {
    if (states.game !== 0) {
      parseData();
    }
  }, [states.game]);

  useEffect(() => {
    console.log(leaders);
  }, [leaders]);

  const parseData = () => {
    const currentBoard = states.game;
    let leadersName = [];
    let leadersTime = [];
    leaderboard.forEach((element) => {
      if (element.game === currentBoard) {
        leadersName.push(element.name);
        leadersTime.push(element.time);
      }
    });

    setLeaders({ Name: leadersName, Time: leadersTime.sort() });
  };

  return (
    <div className="grid grid-cols-3 text-white text-md">
      <div>
        Rank:
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
        <h1>7</h1>
        <h1>8</h1>
        <h1>9</h1>
        <h1>10</h1>
      </div>
      <div>
        Name:
        {leaders.Name.map((object, i) => (
          <DisplayRowName obj={object} key={i} />
        ))}
      </div>

    </div>
  );
}

const DisplayRowName = (obj) => {
  return (
    <div>
      <ul>obj</ul>
    </div>
  );
};

const DisplayRowTime = (obj) => {
  return (
    <div>
      <ul>{Object.values(obj)}</ul>
    </div>
  );
};

export default Leaderboard;
