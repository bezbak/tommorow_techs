import React, { useState, useEffect } from "react";
import './timeCount.scss'
function TimeCount() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/30/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime();
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      setCountdownData({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div>
      <div id="countdown">
        
        <div id="days">{countdownData.days}дн:</div>
        <div id="hours">{countdownData.hours}ч: </div>
        <div id="minutes">{countdownData.minutes}мин: </div>
        <div id="seconds">{countdownData.seconds}сек </div>
      </div>
      <div id="content" style={{ display: "none" }}>
        {/* Your content here */}
      </div>
    </div>
  );
}

export default TimeCount;