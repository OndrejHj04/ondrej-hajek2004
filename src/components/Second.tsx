import React from "react";
import { skills } from "../support";
import "./components.scss";
export default function Second({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  return (
    <div className="flex" style={{ height: height, width: width }}>
      <div className="w-full h-full flex justify-center flex-col xl:flex-row">
        <div className="flex m-6">
          <div className="rounded-full circle grid grid-rows-3 grid-cols-2 relative overflow-hidden m-auto w-fit">
            <div className="w-full h-full z-20" style={{ background: skills[0].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 70%)" }}></div>
            <div className="w-full h-full z-20" style={{ background: skills[1].color, clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 100%)" }}></div>
            <div className="w-full h-full relative z-10">
              <div className="absolute w-full" style={{ background: skills[2].color, clipPath: "polygon(0 0, 50% 18%, 50% 81%, 0% 100%)", height: "160%", top: "-30%" }}></div>
            </div>
            <div className="w-full h-full relative z-10 rotate-180">
              <div className="absolute w-full" style={{ background: skills[3].color, clipPath: "polygon(0 0, 50% 18%, 50% 82%, 0% 100%)", height: "160%", top: "-30%" }}></div>
            </div>

            <div className="w-full h-full -z-20" style={{ background: skills[4].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 70%)" }}></div>
            <div className="w-full h-full -z-20" style={{ background: skills[5].color, clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 100%)" }}></div>
            <div className="absolute top-1/2 left-1/2 mid z-50"></div>
          </div>
        </div>

        <div className=" flex-1" style={{ minWidth: 300 }}></div>
      </div>
    </div>
  );
}
