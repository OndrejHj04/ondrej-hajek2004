import { firebase, firebaseBG, react, reactBG, typescript, typescriptBG } from "./support";
import { state } from "./type";

export const Skills = ({ state }: { state: state }) => {
  return (
    <div className="w-full h-full font-roboto">

      <div>
        <div className="flex text-7xl justify-end m-2">
          <img src={react} alt="" className="w-28 mr-4"/>
          <p className="my-auto">React</p>
        </div>
        <div id="transition" className={`w-full bg-red-600 ${state.window.position >= 200 ? "scale-x-100" : "scale-x-0"}`} style={{ height: "30px", background: reactBG }} />
      </div>

      <div>
        <div className="flex text-7xl justify-end m-2">
          <img src={firebase} alt="" className="w-28 h-28 mr-4"/>
          <p className="my-auto">Firebase</p>
        </div>
        <div id="transition" className={`w-full bg-red-600 ${state.window.position >= 350 ? "scale-x-100" : "scale-x-0"}`} style={{ height: "30px", background: firebaseBG }} />
      </div>

      <div>
        <div className="flex text-7xl justify-end m-2">
          <img src={typescript} alt="" className="w-28 mr-4"/>
          <p className="my-auto">Typescript</p>
        </div>
        <div id="transition" className={`w-full bg-red-600 ${state.window.position >= 500 ? "scale-x-100" : "scale-x-0"}`} style={{ height: "30px", background: typescriptBG }} />
      </div>
    </div>
  );
};
