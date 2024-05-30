"use client";

import { useEffect, useState } from "react";

const ClockComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  return (
    <div className="flex lg:items-center lg;justify-start lg:flex-row lg:gap-10  gap-6">
      <h1 className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
        Flash Sales:
      </h1>
      <p className="lg:text-4xl lg:font-extrabold text-2xl font-extrabold">
        {formatTime(time)}
      </p>
    </div>
  );
};

export default ClockComponent;
