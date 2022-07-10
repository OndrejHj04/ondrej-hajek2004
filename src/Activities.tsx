import { memo, useEffect, useReducer } from "react";
import { activities, activitiesActions, activitiesObject, screen } from "./type";

const reducer = (activities: activities, action: activitiesActions) => {
  switch (action.type) {
    case "aim":
      return { ...activities, aim: action.aim };
    case "kick":
      return { ...activities, kick: !activities.kick, aim: -1 };
  }
};

export const Activities = memo(({ screen }: { screen: screen }) => {
  const [activities, dispatch] = useReducer(reducer, activitiesObject);

  useEffect(()=>{
    activities.kick&&setTimeout(()=>{
      dispatch({type: "kick"})
    },1000)
  },[activities.kick])

  return (
    <div className="flex w-full flex-col relative" style={{ minHeight: 500, height: screen.height }}>
      <div className="h-32 bg-blue-500"></div>
      <div className="absolute left-1/2 w-full" style={{ transform: "translate(-50%,0)", maxWidth: 400 }}>
        <div className="w-full h-full absolute grid grid-rows-3 grid-cols-3">
          {[...Array(9)].map((item, index) => (
            <div key={index} onClick={() => dispatch({ type: "aim", aim: index })}>
              {activities.aim === index && <img src={require("./images/aim.png")} className="w-28 m-auto" alt="" />}
            </div>
          ))}
        </div>
        <img src={require("./images/net.png")} alt="" />
      </div>
      <div className="flex-1 bg-green-600"></div>

      <div onClick={() => activities.aim > -1&&dispatch({ type: "kick" })} id="ball" className="xl:w-40 w-28 xl:h-40 h-28 absolute bottom-0 left-1/2 mb-10" style={{ transform: "translate(-50%,0)" }}>
        {activities.kick && <img src={require("./images/boom.png")} alt="" />}
      </div>
    </div>
  );
});
