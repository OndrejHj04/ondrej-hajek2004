import { actions, state } from "./type";

export const Intro = ({ size, state, dispatch }: { size: { width: number; height: number }; state: state, dispatch: React.Dispatch<actions> }) => {
  return (
    <div className="w-full h-auto bg-black font-roboto flex text-white md:flex-row flex-col min-h-full">
      <div className="h-auto flex md:text-8xl text-5xl md:m-0 mt-8 mx-auto">
        <div className="grid p-2 my-auto">
          <p>{state.firstName[0]}</p>
          <p>{state.firstName[1]}</p>
          <p>{state.firstName[2]}</p>
          <p>{state.firstName[3]}</p>
          <p>{state.firstName[4]}</p>

          <p className="row-span-2" style={size.width > 767 ? { fontSize: "192px", lineHeight: "150px", letterSpacing: "-20px" } : { fontSize: "150px", lineHeight: "50px", letterSpacing: "-25px", marginLeft: "-20px" }}>
            j
          </p>

          <p className="col-start-4">{state.secondName[0]}</p>
          <p>{state.secondName[1]}</p>
          <p className="col-start-7">{state.secondName[3]}</p>
          <p className="col-start-8">{state.secondName[4]}</p>
        </div>
      </div>

      <div className="flex-1 flex mb-10 mt-4 md:m-0">
        <div className="w-60 h-60 m-auto" onMouseEnter={()=>dispatch({type: "hover", act: true})} onMouseLeave={()=>dispatch({type: "hover", act: false})}>
          {state.hover ? (
            <div className="w-full h-full bg-red-700 flex flex-col relative">
              <div>
                <p className="text-9xl text-center z-40">404</p>
                <h1 className="text-white p-1 z-40">
                  Error: computer graphic isn´t in Ondřej Hájek´s skill-set! You may find solution <span className="text-yellow-400 font-semibold">hier.</span>
                </h1>
              </div>
            </div>
          ) : (
            <div className="w-full h-full border-4 border-dotted flex">
              <h1 className="my-auto w-full text-6xl text-center">New<br />LOGO</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
