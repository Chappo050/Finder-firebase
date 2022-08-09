import { useEffect, useState } from "react";

import { UserContext } from "../UserContext";
import { useContext } from "react";


const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    const { states } = useContext(UserContext);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);


    useEffect(() => {
setTime(0)
    },[states.game] )
    return (
      <div className="stopwatch">
        <div className="numbers" >
          <label id="timerM">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</label>
          <label id="timerS">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</label>
          <label id="timerMi">{("0" + ((time / 10) % 100)).slice(-2)}</label>
        </div>
        <div className="buttons">
        </div>
      </div>
    );
  };

  export default Timer