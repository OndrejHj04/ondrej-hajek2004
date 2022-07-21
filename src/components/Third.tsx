import React, { useEffect, useState } from "react";
export default function Third({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());
  const [activity, setActivity] = useState("")

  useEffect(()=>{
    hours<7&&setActivity("sleeping")
    hours>=7&&hours<14&&setActivity("at school")
    hours>=14&&hours<17&&setActivity("programming")
    hours>=17&&hours<19&&setActivity("playing football")
    hours>=19&&hours<22&&setActivity("programming")
  },[hours])

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes(new Date().getMinutes());
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  return (
    <div className="flex flex-col" style={{ height: height, width: width }}>
      {block ? (
        <div className="title w-fit">Routine</div>
      ) : (
        <div className="flex flex-col w-full h-full">
          <h1 className="text-center md:text-4xl text-2xl">My normal day</h1>
          <div className="m-auto">
            <div className="w-full">
              <div className="text-center" id="clock">
                {hours.toString().length < 2 ? "0" + hours.toString() : hours}:{minutes.toString().length < 2 ? "0" + minutes.toString() : minutes}:{seconds.toString().length < 2 ? "0" + seconds.toString() : seconds}
                <div className="flex-1 flex">
                  <div className="flex-col mx-auto text-center flex text p-2">Now I am probably {activity}!</div>
                </div>              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
