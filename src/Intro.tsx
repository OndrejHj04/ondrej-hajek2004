import { memo, useEffect, useRef, useState } from "react";
import "./intro.scss";
import UEFA from "./sound/uefa.mp3";

export const Intro = memo(({ height }: { height: number }) => {
  const [state, setState] = useState(false);
  const ref = useRef<HTMLAudioElement>(null!);

  useEffect(() => {
    if(state){
      ref.current.currentTime = 0
      ref.current.play()
    }else{
      ref.current.pause()
    }
  }, [state]);
  return (
    <>
      <div style={{ minHeight: height, height: "auto" }} className="bg-black relative">
        <audio ref={ref}>
          <source src={UEFA} type="audio/mpeg" />
        </audio>
        <img src={require("./images/switch.png")} onClick={() => setState((c) => !c)} className="absolute bottom-0 left-1/2 w-32" alt="" style={{ transform: `translate(-50%) ${state ? "scaleX(-1)" : "scaleY(1)"}` }} />
      </div>
    </>
  );
});
