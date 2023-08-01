// TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const DigiQuizTimeContext = createContext();

const DigiQuizTimerProvider = ({ children }) => {
  const initialTime = 60; // Initial time in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <DigiQuizTimeContext.Provider value={{ timeLeft }}>
      {children}
    </DigiQuizTimeContext.Provider>
  );
};

export { DigiQuizTimeContext, DigiQuizTimerProvider };
