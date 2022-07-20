import React, { useRef, useState } from "react";

export default function First({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  const logo = useRef<HTMLDivElement>(null!);
  const [hover, setHover] = useState(false);
  
  return (
    <div className="flex flex-col" style={{ height: height, width: width }}>
      {block ? (
        <div className="title w-fit">Intro</div>
      ) : (
        <div className="w-full h-full bg-black text-white flex font-roboto xl:flex-row flex-col">
          <div className="xl:h-full h-1/2 flex">
            <div className="xl:w-auto w-fit my-auto xl:text-8xl text-5xl font-semibold mx-auto xl:mx-5">
              <p>Ondře</p>
              <p style={{lineHeight: 0}}>&nbsp;&nbsp;&nbsp;Há<span className="relative xl:-left-3 -left-1 xl:-top-10 -top-5" style={{fontSize: width>1279?"14rem":"7rem", letterSpacing: width>1279?-40:-20}}>j</span>ek</p>
            </div>
          </div>

          <div className="xl:h-full xl:w-full h-1/2 w-full  flex ">

            <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="xl:text-8xl text-5xl m-auto xl:w-64 xl:h-64 w-44 h-44 p-2 flex flex-col justify-between text-center box" ref={logo}>
              {!hover ? (
                <>
                  <p className="mt-auto">NEW</p>
                  <p className="mb-auto">LOGO</p>
                </>
              ) : (
                <div className="w-full h-full bg-red-700">
                  <p className="xl:text-9xl text-7xl">404</p>
                  <p className="xl:text-2xl text-base my-auto mt-auto" style={{wordSpacing: -5}}>2D graphics is not in Ondřej Hájex skill-set!</p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
