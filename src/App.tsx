import React, { useEffect, useReducer } from "react";
import { Activities } from "./Activities";
import { Intro } from "./Intro";
import { Skills } from "./Skills";
import { screen, screenActions, screenObject } from "./type";

const reducer = (screen: screen, actions: screenActions) => {
  switch (actions.type) {
    case "resize":

      return { ...screen, width: window.innerWidth, height: window.innerHeight };
    case "scroll":
      return { ...screen, scrollY: window.scrollY };
  }
};

export const App = () => {
  const [screen, dispatch] = useReducer(reducer, screenObject);
  useEffect(() => {
    dispatch({ type: "resize" });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
    window.addEventListener("scroll", () => dispatch({ type: "scroll" }));
  }, []);
  return (
    <div>
      <section>
        <Intro width={screen.width} height={screen.height} />
      </section>
      <section>
        <Skills height={screen.height} scrollY={screen.scrollY} />
      </section>
      <section>
        <Activities screen={screen} />
      </section>
    </div>
  );
};
