import React from "react";

const Timer = () => {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  },[]);

  return (
    <div>
        <h2>{seconds} seconds</h2>
    </div>
  )
  
 
};

export default Timer;
