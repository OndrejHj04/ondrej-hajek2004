import React, { useState } from "react";
import { imgs, skills } from "../support";
import "./components.scss";
export default function Second({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  const [rotate, setRotate] = useState(0);
  console.log(rotate)
  return (
    <div className="flex" style={{ height: height, width: width }}>
      <div className="w-full h-full flex justify-center flex-col md:flex-row ">
        <div className="flex m-6 transition-all" style={{ transform: `rotate(${rotate*60}deg)` }}>
          <div className="rounded-full circle grid grid-rows-3 grid-cols-2 relative  m-auto w-fit overflow-hidden">

            <div onClick={()=>setRotate(1)}>
              <div className="w-full z-20 row-start-1 col-start-1" style={{ height: "150%", background: skills[0].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>

            <div onClick={()=>setRotate(0)}>
              <div className="w-full h-full z-20 row-start-1 col-start-2" style={{ height: "150%", background: skills[1].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>

            <div className="relative z-40" onClick={()=>setRotate(2)}>
              <div className="w-full absolute" style={{background: skills[2].color, height: "166%", top: "-33%", clipPath: "polygon(0% 100%, 0 0, 100% 50%)" }}></div>
            </div>
            <div className="relative z-40" onClick={()=>setRotate(5)}>
              <div className="w-full absolute" style={{ background: skills[3].color, height: "166%", top: "-33%", clipPath: "polygon(100% 100%, 100% 0%, 0% 50%)" }}></div>
            </div>

            <div onClick={()=>setRotate(3)}>
              <div className="w-full h-full -z-20 row-start-3 col-start-1 relative" style={{ bottom: "50%", height: "150%", background: skills[4].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>

            <div onClick={()=>setRotate(4)}>
              <div className="w-full h-full -z-20 row-start-3 col-start-2 relative" style={{ bottom: "50%", height: "150%", background: skills[5].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
            </div>

            <div className="absolute top-1/2 left-1/2 mid z-50"></div>
          </div>
        </div>

        <div className="flex-1 p-3" style={{ minWidth: 300 }}>
          <div className="border-slate-500 border-8 w-full h-full rounded-3xl relative">
            <img src={require(`../images/${imgs[rotate]}.png`)} alt="" className="md:w-44 md:h-44 w-20 h-20 absolute" />
          </div>
        </div>
      </div>
    </div>
  );
}
