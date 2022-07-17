import React from "react";

export default function Fourth({ count, height, block }: { count: number; height: number; block: boolean }) {
  return (
    <div className="flex flex-col" style={{ height: height }}>
      {block ? <div className="title w-fit">Contact</div> : <div className="w-full h-full bg-red-500"></div>}
    </div>
  );
}
