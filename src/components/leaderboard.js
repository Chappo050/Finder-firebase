import { UserContext } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

function Leaderboard() {
  const { states } = useContext(UserContext);
  const [leaderboard, setLeaderboard] = useState(0);
  const [parsingData, setParsingData] = useState(0);
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

  const parseData = () => {
    console.log(leaderboard);
    const currentBoard = states.game;
    let temp = {};
    let tempLeaderBoards = leaderboard
    tempLeaderBoards.forEach((element) => {
      if (element.game === currentBoard) {
        if (Object.keys(element)[0] === 'game') {
          const key = Object.keys(element)[1];
          let value = Object.values(element)[1];
  
          value = value.replace(/:/g, "");
  
          temp[key] = value;
        }
        else {
          const key = Object.keys(element)[0];
          let value = Object.values(element)[0];
  
          value = value.replace(/:/g, "");
  
          temp[key] = value;
        }
       
      }
    });
    //sorting fastest to slowest (found on stackoverflow, no clue how it works)
    const sorted = Object.entries(temp)
      .sort(([, a], [, b]) => a - b)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
      setLeaders(sorted)
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
        {Object.keys(leaders).map((key) => (
          <DisplayRowName obj={key} />
        ))}
      </div>
      <div>
        Time:
        {Object.values(leaders).map((v) => (
          <DisplayRowTime obj={v} />
        ))}
      </div>
    </div>
  );
}

const DisplayRowName = ({ obj }) => {
  return (
    <div>
      <ul>{obj}</ul>
    </div>
  );
};

const DisplayRowTime = ({ obj }) => {
  let time = obj;
  time = time.slice(0,2) + ":" + time.slice(2,4) + ":" + time.slice(4,6)
  return (
    <div>
      <ul>{time}</ul>
    </div>
  );
};

export default Leaderboard;
