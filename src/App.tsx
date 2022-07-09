import React, { useEffect, useReducer } from "react";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
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
      case "resize":
        return {...state, window: {...state.window, width: window.innerWidth, height: window.innerHeight}}
      case "scroll":
        return {...state, window: {...state.window, position: window.scrollY}}
    }

  }

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial)
  useEffect(()=>{
    window.addEventListener("resize", () => dispatch({type: "resize"}))
    window.addEventListener("scroll", ()=>dispatch({type: "scroll"}))
    let i = 0
    const interval = setInterval(()=>{
      
      i>3&&clearInterval(interval)
      dispatch({type: "name", index:i})
      i++

    },300)
  },[])
  
  return (
    <div>
      <section style={{ height: state.window.height }}>
        <Intro state={state} dispatch={dispatch}/>
      </section>
      <section style={{height: state.window.height}}>
      <Skills state={state}/>
      </section>
    </div>
  );
};
