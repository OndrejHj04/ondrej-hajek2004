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
      <div className="h-auto flex md:text-8xl text-5xl md:m-0 mt-8 mx-auto">
        <div className="grid p-2 my-auto">
          <p>{intro.firstName[0]}</p>
          <p>{intro.firstName[1]}</p>
          <p>{intro.firstName[2]}</p>
          <p>{intro.firstName[3]}</p>
          <p>{intro.firstName[4]}</p>

          <p className="row-span-2" style={width > 767 ? { fontSize: "192px", lineHeight: "150px", letterSpacing: "-20px" } : { fontSize: "150px", lineHeight: "50px", letterSpacing: "-25px", marginLeft: "-20px" }}>
            j
          </p>

          <p className="col-start-4">{intro.secondName[0]}</p>
          <p>{intro.secondName[1]}</p>
          <p className="col-start-7">{intro.secondName[3]}</p>
          <p className="col-start-8">{intro.secondName[4]}</p>
        </div>
      </div>

      <div className="flex-1 flex mb-10 mt-4 md:m-0">
        <div className="w-60 h-60 m-auto transition-all" onMouseEnter={() => dispatch({ type: "hover", act: true })} onMouseLeave={() => dispatch({ type: "hover", act: false })}>
          {intro.hover ? (
            <div className="w-full h-full bg-red-700 flex flex-col relative">
              <div>
                <p className="text-9xl text-center z-40">404</p>
                <h1 className="text-white z-40">
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
})
