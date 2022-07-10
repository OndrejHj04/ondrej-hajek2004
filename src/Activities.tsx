import { memo, useReducer } from "react";
import { activities, activitiesActions, activitiesObject, screen } from "./type";

const reducer = (activities: activities, action: activitiesActions) => {
  switch (action.type) {
    case "type":
      return {...activities}
  }
};

export const Activities = memo(({ screen }: { screen: screen }) => {
  const [activities, dispatch] = useReducer(reducer, activitiesObject);
  console.log(activities, dispatch)
  return (
    <div className="flex w-full flex-col relative" style={{minHeight: 500, height: screen.height}} >
      <div className="h-32 bg-blue-500"></div>
      <img src={require("./images/net.png")} alt="" className="absolute left-1/2" style={{transform: "translate(-50%,0)"}}/>
      <div className="flex-1 bg-green-600" ></div>

      <div id="ball" className="xl:w-40 w-28 xl:h-40 h-28 absolute bottom-0 left-1/2 mb-10" style={{transform: "translate(-50%,0)"}}></div>
    </div>
  );
});
