import { memo, useEffect, useReducer } from "react";
import { intro, introActions, introObject } from "./type";

const reducer = (intro: intro, action: introActions) => {
  switch (action.type) {
    case "name":
      const first = ["o", "n", "d", "ř", "e"];
      intro.firstName[action.index] = first[action.index];
      const second = ["h", "á", "", "e", "k"];
      intro.secondName[action.index] = second[action.index];

      return { ...intro, firstName: intro.firstName, secondName: intro.secondName };
    case "hover":
      return { ...intro, hover: action.act };
  }
};

export const Intro = memo(({ width, height }: { width: number; height: number }) => {
  const [intro, dispatch] = useReducer(reducer, introObject);
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i > 3 && clearInterval(interval);
      dispatch({ type: "name", index: i });
      i++;
    }, 300);
  }, []);

  return (
    <div className="w-full bg-black font-roboto flex text-white md:flex-row flex-col" style={{ height: "auto", minHeight: height }}>

      <div className="flex m-5" style={{fontSize: width < 768?50:100, lineHeight: 1, }}>
        <div className="grid m-auto">
          <p>{intro.firstName}</p>
          <p className="row-span-2 text-9xl" style={{ fontSize: width < 768?140:210, lineHeight: 0.6, letterSpacing: "-20px", marginLeft: "-10px" }}>
            j
          </p>
          <p className="row-start-2 w-full text-right">{intro.secondName.slice(0, 2)}</p>

          <p className="row-start-2 col-start-3">{intro.secondName.slice(3, 5)}</p>
        </div>
      </div>

      <div className="flex-1 flex my-5">
        <div className="w-64 h-64 m-auto" id={`${intro.hover?"":"logo-container"}`} onMouseEnter={() => dispatch({ type: "hover", act: true })} onMouseLeave={() => dispatch({ type: "hover", act: false })}>
          {intro.hover ? (
            <div className="w-full h-full flex flex-col bg-red-600" id="error">
              <div className="flex-1 flex flex-col">
                <p className="text-9xl text-center z-40">404</p>
                <h1 className="text-white z-40 h-full p-1 text- text-center">
                  Error: computer graphic isn´t in Ondřej Hájek´s skill-set! Fell free to leave him a message <span className="text-yellow-400 font-semibold">hier</span>
                </h1>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex" id="logo">
              <h1 className="my-auto w-full text-6xl text-center">
                New
                <br />
                LOGO
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
