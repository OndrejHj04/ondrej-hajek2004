import React, { useEffect, useReducer, useRef, useState } from "react";
import { Intro } from "./Intro";
import { actions, initial, state } from "./type";

  const reducer = (state:state, actions:actions) => {
    switch(actions.type){
      case "name":
        const first = ["o", "n", "d", "ř", "e"]
        state.firstName[actions.index] = first[actions.index]
        const second = ["h", "á", "", "e", "k"]
        state.secondName[actions.index] = second[actions.index]

        return {...state, firstName: state.firstName, secondName: state.secondName}
      case "hover":
        return {...state, hover: actions.act}
    }

  }

export const App = () => {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [state, dispatch] = useReducer(reducer, initial)
  const logo = useRef<HTMLDivElement>(null!)
  useEffect(()=>{
    window.addEventListener("resize", () => setSize({ width: window.innerWidth, height: window.innerHeight }))
    let i = 0
    const interval = setInterval(()=>{
      
      i>3&&clearInterval(interval)
      dispatch({type: "name", index:i})
      i++

    },300)
  },[])
  console.log(state.hover)
  return (
    <div>
      <section style={{ height: size.height }}>
        <Intro size={size} state={state} dispatch={dispatch}/>
      </section>
    </div>
  );
};
