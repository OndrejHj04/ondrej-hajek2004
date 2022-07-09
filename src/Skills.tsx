import { cypress, cypressBG, finishIMG, firebase, firebaseBG, react, reactBG, tailwind, tailwindBG, typescript, typescriptBG, warningIMG } from "./support";
import { window } from "./type";

export const Skills = ({ window }: { window: window }) => {

  return (
    <div className="w-full font-roboto flex" style={{ fontSize: "calc(18px + 1.5vw", height: "auto", minHeight: window.height }}>
      <div id="" className="border-r-4 border-dashed flex border-black w-20">
        <div className=" w-full text-center" style={{ writingMode: "vertical-lr" }}>
          <div className="flex w-full justify-center">
            <img src={finishIMG} alt="" className="w-20 p-1 -rotate-90" />
            <p className="rotate-180 text-7xl">finish</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between" style={{}}>
        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={react} alt="" className="md:w-28 w-12" />
            <p className="my-auto">React</p>
          </div>
          <div id="transition" className={`md:h-7 h-3`} style={{ transform: window.position >= window.offsets[0] - window.height ? "scale(0.4, 1)" : "scale(0, 1)", background: reactBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={firebase} alt="" className="md:w-28 w-12" />
            <p className="my-auto">Firebase</p>
          </div>
          <div id="transition" className={`md:h-7 h-3`} style={{ transform: window.position >= window.offsets[1] - window.height ? "scale(0.4, 1)" : "scale(0, 1)", background: firebaseBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={tailwind} alt="" className="md:w-28 w-12" />
            <p className="my-auto">Tailwind</p>
          </div>
          <div id="transition" className={`md:h-7 h-3`} style={{ transform: window.position >= window.offsets[2] - window.height ? "scale(0.4, 1)" : "scale(0, 1)", background: tailwindBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={typescript} alt="" className="md:w-28 w-12" />
            <p className="my-auto">Typescript</p>
          </div>
          <div id="transition" className={`md:h-7 h-3`} style={{ transform: window.position >= window.offsets[3] - window.height ? "scale(0.4, 1)" : "scale(0, 1)", background: typescriptBG }} />
        </div>

        <div>
          <div className="flex justify-end m-2 mr-0 scale-y-100 transition-all">
            <img src={cypress} alt="" className="md:w-28 w-12" />
            <p className="my-auto">Cypress</p>
          </div>
          <div id="transition" className={`md:h-7 h-3`} style={{ transform: window.position >= window.offsets[4] - window.height ? "scale(0.4, 1)" : "scale(0, 1)", background: cypressBG }} />
        </div>

        <div className="md:text-4xl text-2xl grid w-fit ">
          <img src={require("./images/arrow.png")} alt="" className="sm:w-56 w-32 my-auto sm:row-span-2 row-span-auto" style={{ transform: "rotate(180deg)" }} />

          <div className="flex">
            <p>Warning</p>
            <img src={warningIMG} alt="" className="md:w-12 w-9" />
          </div>

          <p className="sm:col-start-2 md:text-xl text-base sm:row-start-auto row-start-3">this is definitely not Ondřej Hájeks limit</p>
        </div>
      </div>
    </div>
  );
};
