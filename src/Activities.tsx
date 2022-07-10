import { memo, useEffect, useReducer } from "react";
import { keyboardFirst, keyboardSecond, keyboardThird } from "./support";
import { activities, activitiesActions, activitiesObject, screen } from "./type";

const reducer = (activities:activities, action:activitiesActions) => {
  switch(action.type){
    case "keyboard":
      return {...activities, keyboard: !activities.keyboard.includes(action.key)?activities.keyboard+action.key:activities.keyboard}
    case "toggle":
      return {...activities, toggle: !activities.toggle}
    case "backspace":
      return {...activities, keyboard: activities.keyboard.slice(0,-1)}
  }
}

export const Activities = memo(({ screen }: { screen: screen }) => {
  const [activities, dispatch] = useReducer(reducer, activitiesObject)

  useEffect(() => {
    // setInterval(() => {
    //   dispatch({type: "toggle"})
    // }, 1000);
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase()
      if (keyboardFirst.includes(key)||keyboardSecond.includes(key)||keyboardThird.includes(key)|| key === "a" || key === "y") {
        dispatch({type: "keyboard", key: key})
      } else if (e.key === "Backspace") {
        dispatch({type: "backspace"})
      }
    });
  }, []);
  
  
  return (
    <div style={{ minHeight: screen.height, height: "auto" }} className="bg-black flex text-white xl:flex-row flex-col">
      <div className="xl:w-1/2 w-full flex flex-col border-r-4 border-dashed">
        <div className="xl:text-7xl text-4xl text-center">
          <p className="break-words my-4">
            {activities.keyboard}
            <span className={`${activities.toggle ? "opacity-100" : "opacity-0"}`}>|</span>
          </p>
        </div>
        <div className="grid grid-rows-3 m-auto xl:mb-auto md:text-4xl text-lg border-4 p-3 rounded-2xl mb-3">

          <div className="flex">
            {keyboardFirst.map((item) => <p key={item} onClick={(e)=>dispatch({type: "keyboard", key: (e.target as HTMLInputElement).textContent!})} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!activities.keyboard.includes(item)&&item}</p>)}
          </div>

          <div className="flex">
            <p className="border-2 md:w-12 md:h-12 w-7 h-7 text-center ml-3" onClick={(e)=>dispatch({type: "keyboard", key: (e.target as HTMLInputElement).textContent!})}>{!activities.keyboard.includes("a")&&"a"}</p>
            {keyboardSecond.map((item) => <p key={item} onClick={(e)=>dispatch({type: "keyboard", key: (e.target as HTMLInputElement).textContent!})} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!activities.keyboard.includes(item)&&item}</p>)}
          </div>

          <div className="flex">
            <p className="border-2 md:w-12 md:h-12 w-7 h-7 text-center ml-10" onClick={(e)=>dispatch({type: "keyboard", key: (e.target as HTMLInputElement).textContent!})}>{!activities.keyboard.includes("y")&&"y"}</p>
            {keyboardThird.map((item) => <p key={item} onClick={(e)=>dispatch({type: "keyboard", key: (e.target as HTMLInputElement).textContent!})} className="border-2 md:w-12 md:h-12 w-7 h-7 text-center">{!activities.keyboard.includes(item)&&item}</p>)}
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 xl:h-auto w-full border-l-4 border-dashed flex flex-col" style={{height: screen.height}}>
      <div className="bg-blue-600 h-1/5 w-full flex"></div>
        <div className="bg-green-600 h-2/5 w-full">
          <div className="border-8 border-b-0 sm:w-96 w-72 sm:h-36 h-28 mx-auto -mt-10"></div>
        </div>
        <div className="bg-green-600 h-2/5 w-full"></div> 
      </div>
    </div>
  );
});
         