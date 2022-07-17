import React from "react";

export default function Third({ count, height, block }: { count: number; height: number, block: boolean }) {
  return (
    <div className="flex flex-col" style={{ height: height }}>
      {block?<div className="title w-fit">Free time</div>:<div className="w-full h-full bg-red-500"></div>}
    </div>
  );
}
