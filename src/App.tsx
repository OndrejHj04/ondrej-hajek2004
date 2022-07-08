import React, { useEffect, useState } from "react";
import { Intro } from "./Intro";

export const App = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(()=>{
    window.addEventListener("resize", () => setSize({ width: window.innerWidth, height: window.innerHeight }))

  },[])
  console.log("xd")
  return (
    <div>
      <section style={{ height: size.height }}>
        <Intro size={size} />
      </section>
    </div>
  );
};
