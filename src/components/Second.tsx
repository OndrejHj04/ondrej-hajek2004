import { useEffect, useState } from "react";
import { imgs } from "../support";
import { Circle } from "./Circle";
import "./components.scss";
export default function Second({ count, height, block, width, code }: { count: number; height: number; block: boolean; width: number, code: string[] }) {
  const [rotate, setRotate] = useState(0);




  return (
    <div className="flex" style={{ height: height, width: width }}>
      <div className="w-full h-full flex justify-center flex-col md:flex-row ">
        <Circle rotate={rotate} setRotate={setRotate} />
        {/* vs code*/}

        <div className="flex-1" style={{ minWidth: 300 }}>
          <div className="h-full text-white" style={{background: "#1e1e1e"}}>
            <div className="h-10 flex overflow-auto w-max" style={{ background: "#252526" }}>


                <div style={{ background: "#2d2d2d" }} className="h-full flex">
                  <img src={require(`../images/${imgs[rotate].tech}.png`)} alt="" className="h-6 m-2" />
                  <p className="m-2 ml-0">{imgs[rotate].title}</p>
                </div>
            </div>

            <textarea readOnly style={{fontSize: "calc(1vw +  12px)", background: "#1e1e1e"}} name="" id="" value={code[rotate]} className="bg-black w-full h-full outline-none"></textarea>

          </div>
        </div>

        {/* vs code*/}
      </div>
    </div>
  );
}