import React, { useEffect, useState } from "react";
import { Intro } from "./Intro";

export const App = () => {
    const [height, setHeight] = useState(window.innerHeight)
    useEffect(()=>window.addEventListener("resize", ()=>setHeight(window.innerHeight)))
  return (
    <div>
        <section style={{height: height}}><Intro /></section>
    </div>
  )
};
