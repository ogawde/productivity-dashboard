import { useState, useEffect, useRef } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else {
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, minutes]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(99, parseInt(e.target.value) || 0));
    setMinutes(value);
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setSeconds(value);
  };

  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
        Pomodoro Timer
      </h1>

      <div className="text-5xl font-mono text-gray-900 dark:text-white font-extrabold p-6 bg-gray-100 dark:bg-gray-700 rounded-full w-48 h-48 flex items-center justify-center shadow-inner">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Minutes</label>
          <input
            className="text-center text-lg p-2 w-16 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            type="number"
            value={minutes}
            min={0}
            max={99}
            onChange={handleMinutesChange}
          />
        </div>
        <div className="text-xl font-bold text-gray-600 dark:text-gray-300">:</div>
        <div className="flex flex-col items-center">
          <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Seconds</label>
          <input
            className="text-center text-lg p-2 w-16 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            type="number"
            value={seconds}
            min={0}
            max={59}
            onChange={handleSecondsChange}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          className="bg-green-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-green-600 transition-colors duration-200 hover:shadow-lg"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="bg-red-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-red-600 transition-colors duration-200 hover:shadow-lg"
          onClick={handleStop}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200 hover:shadow-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
