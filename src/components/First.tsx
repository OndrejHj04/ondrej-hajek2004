import React, { useRef } from "react";

export default function First({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  const logo = useRef<HTMLDivElement>(null!)
  return (
    <div className="flex flex-col" style={{ height: height, width: width }}>
      {block ? (
        <div className="title w-fit">Intro</div>
      ) : (
        <div className="w-full h-full bg-black text-white flex">
          <div className="h-full flex">
            <div className="my-auto sm:text-7xl text-5xl font-semibold sm:mx-5 mx-2">
              Ondřej
              <br />
              Hájek
            </div>
          </div>

          <div className="flex-1 flex">

            <div className="m-auto sm:w-52 sm:h-52 w-36 h-36 border-4 border-dashed p-1 flex flex-col justify-between text-center" ref={logo}>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
