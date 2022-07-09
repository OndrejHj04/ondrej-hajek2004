import React, { useEffect, useReducer } from "react";
import { Free } from "./Free";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { actions, initial, state } from "./type";

const reducer = (state: state, actions: actions) => {
  switch (actions.type) {
    case "name":
      const first = ["o", "n", "d", "ř", "e"];
      state.firstName[actions.index] = first[actions.index];
      const second = ["h", "á", "", "e", "k"];
      state.secondName[actions.index] = second[actions.index];

      return { ...state, firstName: state.firstName, secondName: state.secondName };
    case "hover":
      return { ...state, hover: actions.act };
    case "resize":
    const offsets:number[] = []
      document.querySelectorAll("#transition").forEach(item=>offsets.push((item as HTMLElement).offsetTop ))
      return { ...state, window: { ...state.window, width: window.innerWidth, height: window.innerHeight, offsets: offsets } };
    case "scroll":
      return { ...state, window: { ...state.window, position: window.scrollY } };
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    dispatch({ type: "resize" })
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
    window.addEventListener("scroll", () => dispatch({ type: "scroll" }));
    let i = 0;
    const interval = setInterval(() => {
      i > 3 && clearInterval(interval);
      dispatch({ type: "name", index: i });
      i++;
    }, 300);
  }, []);

  return (
    <div>
      <section>
        <Intro state={state} dispatch={dispatch} />
      </section>
      <section>
        <Skills window={state.window} />
      </section>
      <section>
        <Free height={state.window.height}/>
      </section>
    </div>
  );
};
