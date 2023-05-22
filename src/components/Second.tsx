import { useEffect, useState } from "react";
import { imgs } from "../support";
import { Circle } from "./Circle";
import "./components.scss";
import "./theme.scss";
import Prism from "prismjs";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Second({ count, height, block, width, code, setCodeScroll }: { setCodeScroll: React.Dispatch<React.SetStateAction<boolean>>; count: number; height: number; block: boolean; width: number; code: { file: string; code: string }[] }) {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [active]);

  useEffect(() => {
    Prism.highlightAll();
  }, [rotate]);

  return (
    <div className="flex" style={{ height: height, width: width }}>
      {block?
        <div className="title w-fit">Skills</div>
      :<div className="w-full h-full flex flex-col md:flex-row ">
        <Circle rotate={rotate} setRotate={setRotate} active={active} setActive={setActive} />

        <div className="flex-1 min-h-0">
          <div className="h-full text-white overflow-y-scroll" onTouchStart={() => setCodeScroll(true)} onTouchEnd={() => setCodeScroll(false)} style={{ background: "#1e1e1e" }}>
            <div className="h-10 flex overflow-auto w-max" style={{ background: "#252526" }}>
              {active && (
                <div style={{ background: "#2d2d2d" }} className="h-full flex">
                  <img src={require(`../images/${imgs[rotate].tech}.png`)} alt="" className="h-6 m-2" />
                  <p className="m-2 ml-0">{code.length && code[rotate].file}</p>
                </div>
              )}
            </div>

            {active ? (
              <pre>
                <code className="language-js">{code.length && code[rotate].code}</code>
              </pre>
            ) : <Skeleton baseColor="#202020" highlightColor="#444" style={{fontSize: height}}/>}
          </div>
        </div>
      </div>}
    </div>
  );
}
