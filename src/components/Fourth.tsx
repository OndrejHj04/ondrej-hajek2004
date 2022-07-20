import React from "react";

export default function Fourth({ count, height, block, width }: { count: number; height: number; block: boolean; width: number }) {
  return (
    <div className="flex flex-col" style={{ height: height, width: width }}>
      {block ? <div className="title w-fit">Contact</div> : 
      <div className="w-full h-full bg-red-500">
        <div></div>
      </div>
      }
    </div>
  );
}
