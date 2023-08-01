// TimerContext.js
import React, { createContext, useState, useEffect } from 'react';

const PernQuizTimeContext = createContext();

const PernQuizTimerProvider = ({ children }) => {
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
    <PernQuizTimeContext.Provider value={{ timeLeft }}>
      {children}
    </PernQuizTimeContext.Provider>
  );
};

export { PernQuizTimeContext, PernQuizTimerProvider };
