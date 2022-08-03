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
  const [code, setCode] = useState<{file: string, code: string}[]>([])
  const [codeScroll, setCodeScroll] = useState(false);
  const mobileScrollValuePx = 100;

  const components = [<First count={count} height={height} block={block} width={width}/>, 
  <Second count={count} height={height} block={block} width={width} code={code} setCodeScroll={setCodeScroll}/>, 
  <Third count={count} height={height} block={block} width={width}/>, 
  <Fourth count={count} height={height} block={block} width={width}/>];
  const add = (event: React.WheelEvent<HTMLDivElement>) => {
    !block && setCount((c) => (event.deltaY > 0 ? (c < components.length - 1 ? c + 1 : c) : c > 0 ? c - 1 : c));
  };
  console.log(codeScroll)
  useEffect(() => {
    setBlock(true);

    setTimeout(() => {
      setBlock(false);
    }, 2000);

    setTouch([]);
  }, [count]);


  useEffect(()=>{
    if(!block && Number(touch[0]) && Number(touch[1]) && Math.abs(touch[0] - touch[1]) > mobileScrollValuePx){
      setCount((c) => (touch[0] < touch[1] ? (c > 0 ? c - 1 : c) : c < components.length - 1 && touch[0] > touch[1] ? c + 1 : c))
    }else if(Number(touch[0]) && Number(touch[1])){
      setTouch([])
    }
  },[block, components.length, touch])
 
  useEffect(()=>{
    const urls = [
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/PlayScreen.tsx",
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/cypress/e2e/spec.cy.ts",
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/database.ts",
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/style.scss",
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/Form.tsx",
      "https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/types.ts",
    ]
    fetch("https://api.github.com/repos/OndrejHj04/code-for-OndrejHj/contents/src/types.ts").then(res=>res.json()).then(data=>data)
    Promise.all(urls.map(item=>fetch(item))).then(res=>Promise.all(res.map(item=>item.json()))).then(data=>data.map(item=>setCode(c=>[...c, {code: b64_to_utf8(item.content), file: item.name}])))
  },[])

  function b64_to_utf8(str:string) {
    return decodeURIComponent(escape(window.atob(str)));
  }
  
  return (
    <>
      <div className="font-roboto" style={{ height: height, width: window.innerWidth }} onTouchStart={(event) => !codeScroll&&!block&&setTouch([event.changedTouches[0].clientY, touch[1]])} onTouchEnd={(event) => !codeScroll&&!block&&setTouch([touch[0], event.changedTouches[0].clientY])} onWheel={(event) => add(event)}>
        {components[count]}
      </div>
    </>
  );
};
