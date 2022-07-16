import React, { useEffect, useState } from "react";
import { Intro } from "./Intro";

export const App = () => {

  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  
  useEffect(()=>{

    window.addEventListener("resize", ()=>setSize([window.innerHeight, window.innerWidth]))

    return window.removeEventListener("resize", ()=>setSize([window.innerHeight, window.innerWidth]))
  },[])

  return (
    <div>
      <section>
        <Intro width={size[1]} height={size[0]} />
      </section>
    </div>
  );
};
