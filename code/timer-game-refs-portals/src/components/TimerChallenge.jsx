import React, { useState, useRef, useEffect } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(null);
  const [remainingTime, setRemainingTime] = useState(targetTime);

  const timer = useRef();
  const startTime = useRef();
  const intervalId = useRef();

  useEffect(() => {
    if (timerStarted) {
      intervalId.current = setInterval(() => {
        setRemainingTime(getRemainingTime());
      }, 500); // update every half second
    } else if(intervalId.current) {
      clearInterval(intervalId.current);
    }

        // Clear interval on cleanup
    // return () => clearInterval(intervalId);
  }, [timerStarted]);

  function handleStart() {
    // Save the start time if it's the first start
    if (startTime.current === undefined) {
      startTime.current = Date.now();
    }
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, remainingTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    clearInterval(intervalId.current);
    setTimerStarted(false);
  }

  function getRemainingTime() {
    let elapsedTime = (Date.now() - startTime.current) / 1000;
    let remainingTime = targetTime - elapsedTime;
    return remainingTime > 0 ? remainingTime : 0;
  }

  return (
    <>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        {timerStarted != null && (
          <p>Time Remaining: {remainingTime.toFixed(2)}</p>
        )}
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className="">{timerStarted ? "Timer running..." : "Timer paused"}</p>
      </section>
    </>
  );
}
