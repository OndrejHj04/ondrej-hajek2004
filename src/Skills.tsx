import { cypress, cypressBG, finishIMG, firebase, firebaseBG, react, reactBG, tailwind, tailwindBG, typescript, typescriptBG, warningIMG } from "./support";
import { state } from "./type";

export const Skills = ({ state }: { state: state }) => {
  return (
    <div className="w-full h-full font-roboto flex " style={{ fontSize: "calc(22px + 1.5vw" }}>

      <div id="" className="border-r-4 border-dashed flex border-black w-20">
        <div className="h-full w-full text-center" style={{ writingMode: "vertical-lr" }}>
          <div className="flex h-full w-full justify-center">
            <img src={finishIMG} alt="" className="w-20 p-1 -rotate-90"/>
            <p className="rotate-180 text-7xl">finish</p>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-between">

        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={react} alt="" className="md:w-28 w-16" />
            <p className="my-auto">React</p>
          </div>
          <div id="transition" style={{ transform: state.window.position >= 200 ? "scale(0.4, 1)" : "scale(0, 1)", height: "30px", background: reactBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0">
            <img src={firebase} alt="" className="md:w-28 w-16 md:h-28 h-16" />
            <p className="my-auto">Firebase</p>
          </div>
          <div id="transition" style={{ transform: state.window.position >= 350 ? "scale(0.5, 1)" : "scale(0, 1)", height: "30px", background: firebaseBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0">
            <img src={tailwind} alt="" className="md:w-28 w-16" />
            <p className="my-auto">Tailwind</p>
          </div>
          <div id="transition" style={{ transform: state.window.position >= 500 ? "scale(0.7, 1)" : "scale(0, 1)", height: "30px", background: tailwindBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0">
            <img src={typescript} alt="" className="md:w-28 w-16" />
            <p className="my-auto">Typescript</p>
          </div>
          <div id="transition" style={{ transform: state.window.position >= 650 ? "scale(0.3, 1)" : "scale(0, 1)", height: "30px", background: typescriptBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0">
            <img src={cypress} alt="" className="md:w-28 w-16" />
            <p className="my-auto">Cypress</p>
          </div>
          <div id="transition" style={{ transform: state.window.position >= 800 ? "scale(0.4, 1)" : "scale(0, 1)", height: "30px", background: cypressBG }} />
        </div>


        <div className="text-4xl grid w-fit">
          <img src={require("./images/arrow.png")} alt="" className="sm:w-56 w-32 my-auto sm:row-span-2 row-span-auto" style={{ transform: "rotate(180deg)" }} />

          <div className="flex">
            <p>Warning</p>
            <img src={warningIMG} alt="" className="w-12" />
          </div>

          <p className="sm:col-start-2 text-xl sm:row-start-auto row-start-3">this is definitly not Ondřej Hájeks limit</p>
        </div>
      </div>
    </div>
  );
};
