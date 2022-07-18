import React from "react";
import { skills } from "../support";
import "./components.scss";
export default function Second({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  return (
    <div className="flex" style={{ height: height, width: width }}>
      {block ? (
        <div className="title w-fit">Skills</div>
      ) : (
        <div className="w-full h-full flex flex-col justify-between">
          {skills.map((item, index) => (
            <div className={`flex w-fit ${index % 2 === 0 ? "skill-even" : "skill-odd"}`} key={item} style={{ animation: `${index % 2 === 0 ? "move-even 2s" : "move-odd 2s"}` }}>
              
              {index % 2 === 0 && (
                <div className="md:w-32 w-16 md:h-32 h-16 my-auto">
                  <img src={require(`../images/${item}.png`)} alt="" className="md:w-32 w-16 md:h-32 h-16 my-auto" />
                </div>
              )}
              
              <p>{item}</p>

              {index % 2 === 1 && (
                <div className="md:w-32 w-16 md:h-32 h-16 my-auto">
                  <img src={require(`../images/${item}.png`)} alt="" className="md:w-32 w-16 md:h-32 h-16 my-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
