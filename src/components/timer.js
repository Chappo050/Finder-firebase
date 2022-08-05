import { useEffect, useState } from "react";

import { UserContext } from "../UserContext";
import { useContext } from "react";


const Timer = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    const { state } = useContext(UserContext);
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
    },[state] )
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="buttons">
        </div>
      </div>
    );
  };

  export default Timer