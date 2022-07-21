import { useWindowHeight, useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useState } from "react";
import First from "./components/First";
import Fourth from "./components/Fourth";
import Second from "./components/Second";
import Third from "./components/Third";
import "./style.scss";

export const App = () => {
  const height = useWindowHeight();
  const width = useWindowWidth()
  const [count, setCount] = useState(0);
  const [block, setBlock] = useState(false);
  const [touch, setTouch] = useState<number[]>([]);
  
  const mobileScrollValuePx = 50

  const components = [<First count={count} height={height} block={block} width={width}/>, 
  <Second count={count} height={height} block={block} width={width}/>, 
  <Third count={count} height={height} block={block} width={width}/>, 
  <Fourth count={count} height={height} block={block} width={width}/>];
  const add = (event: React.WheelEvent<HTMLDivElement>) => {
    !block && setCount((c) => (event.deltaY > 0 ? (c < components.length - 1 ? c + 1 : c) : c > 0 ? c - 1 : c));
  };

  useEffect(() => {
    setBlock(true);

    setTimeout(() => {
      setBlock(false);
    }, 2000);

    setTouch([]);
  }, [count]);

  useEffect(() => {
    !block && Number(touch[0]) && Number(touch[1]) && Math.abs(touch[0] - touch[1]) > mobileScrollValuePx && setCount((c) => (touch[0] < touch[1] ? (c > 0 ? c - 1 : c) : c < components.length - 1 && touch[0] > touch[1] ? c + 1 : c));
  }, [touch, components.length, block]);

  return (
    <>
      <div className="font-roboto" style={{ height: height, width: window.innerWidth }} onTouchStart={(event) => !block&&setTouch([event.changedTouches[0].clientY, touch[1]])} onTouchEnd={(event) => !block&&setTouch([touch[0], event.changedTouches[0].clientY])} onWheel={(event) => add(event)}>
        {components[count]}
      </div>
    </>
  );
};
