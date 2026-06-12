import { useState, useEffect } from 'react';

function useTimer(deadline) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const t = Date.parse(deadline) - Date.parse(new Date());
    if (t <= 0) {
      return { total: 0, days: '00', hours: '00', minutes: '00', seconds: '00' };
    }
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / 1000 / 60 / 60) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: addZero(days),
      hours: addZero(hours),
      minutes: addZero(minutes),
      seconds: addZero(seconds)
    };
  }

  function addZero(num) {
    return num <= 9 ? '0' + num : String(num);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return timeLeft;
}

export default useTimer;