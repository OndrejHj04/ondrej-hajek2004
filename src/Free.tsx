import { memo, useEffect, useState } from "react";
import { keyboardFirst, keyboardSecond, keyboardThird } from "./support";

export const Free = memo(({ height }: { height: number }) => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setToggle((c) => !c);
    }, 1000);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (keyboardFirst.includes(e.key)||keyboardSecond.includes(e.key)||keyboardThird.includes(e.key)|| e.key === "a" || e.key === "y") {
        setText((c) => !c.includes(e.key)?c + e.key:c);
      } else if (e.key === "Backspace") {
        setText((c) => c.slice(0,-1))
      }
    });
  }, []);

  
  return (
    <div style={{ minHeight: height, height: "auto" }} className="bg-black flex text-white xl:flex-row flex-col">
      <div className="xl:w-1/2 w-full  flex flex-col border-r-4 border-dashed">
        <div className="xl:text-7xl text-4xl text-center">
          <p className="break-words my-4">
            {text}
            <span className={`${toggle ? "opacity-100" : "opacity-0"}`}>|</span>
          </p>
        </div>
        <div className="grid grid-rows-3 m-auto md:text-4xl text-lg border-4 p-3 rounded-2xl">

          <div className="flex">
            {keyboardFirst.map((item) => <p key={item} onClick={(e)=>setText(c=>c+(e.target as HTMLElement).textContent)} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!text.includes(item)&&item}</p>)}
          </div>

          <div className="flex">
            <p className="border-2 md:w-12 md:h-12 w-7 h-7 text-center ml-3" onClick={(e)=>setText(c=>c+(e.target as HTMLElement).textContent)}>{!text.includes("a")&&"a"}</p>
            {keyboardSecond.map((item) => <p key={item} onClick={(e)=>setText(c=>c+(e.target as HTMLElement).textContent)} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!text.includes(item)&&item}</p>)}
          </div>

          <div className="flex">
            <p className="border-2 md:w-12 md:h-12 w-7 h-7 text-center ml-10" onClick={(e)=>setText(c=>c+(e.target as HTMLElement).textContent)}>{!text.includes("y")&&"y"}</p>
            {keyboardThird.map((item) => <p key={item} onClick={(e)=>setText(c=>c+(e.target as HTMLElement).textContent)} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!text.includes(item)&&item}</p>)}
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 flex-1 w-full border-l-4 border-dashed flex">
        <div className="grid grid-cols-5 grid-rows-5 w-full">
          <div id="ball" className={`transition-all flex`}>
            <div className="w-1/2 h-full"></div>
            <div className="w-1/2 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
