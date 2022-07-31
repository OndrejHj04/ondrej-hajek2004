import { imgs, skills } from "../support";

export const Circle = ({rotate, setRotate}:{rotate: number, setRotate:React.Dispatch<React.SetStateAction<number>>}) => {

    return (
        <div className="flex md:m-6 m-1 ">

        <div className="rounded-full circle grid grid-rows-3 grid-cols-2 relative  m-auto w-fit overflow-hidden transition-all"  style={{ transform: `rotate(${rotate * 60}deg)` }}>

          <div onClick={() => setRotate(1)}>
            <div className="w-full z-20 row-start-1 col-start-1" style={{ height: "150%", background: skills[0].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
          </div>

          <div onClick={() => setRotate(0)}>
            <div className="w-full h-full z-20 row-start-1 col-start-2" style={{ height: "150%", background: skills[1].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
          </div>

          <div className="relative z-40" onClick={() => setRotate(2)}>
            <div className="w-full absolute" style={{ background: skills[2].color, height: "166%", top: "-33%", clipPath: "polygon(0% 100%, 0 0, 100% 50%)" }}></div>
          </div>
          <div className="relative z-40" onClick={() => setRotate(5)}>
            <div className="w-full absolute" style={{ background: skills[3].color, height: "166%", top: "-33%", clipPath: "polygon(100% 100%, 100% 0%, 0% 50%)" }}></div>
          </div>

          <div onClick={() => setRotate(3)}>
            <div className="w-full h-full -z-20 row-start-3 col-start-1 relative" style={{ bottom: "50%", height: "150%", background: skills[4].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
          </div>

          <div onClick={() => setRotate(4)}>
            <div className="w-full h-full -z-20 row-start-3 col-start-2 relative" style={{ bottom: "50%", height: "150%", background: skills[5].color, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}></div>
          </div>

          <div className="absolute top-1/2 left-1/2 mid z-50 flex">
            <img src={require(`../images/${imgs[rotate].tech}.png`)} style={{transform: `rotate(-${rotate*60}deg)`}} alt="" className="w-4/6 h-4/6 m-auto"/>
          </div>
        </div>
      </div>
    )
}