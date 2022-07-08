export const Intro = ({size}:{size:{width: number, height: number}}) => {
  return (
    <div className="w-full h-auto bg-black font-roboto flex text-white md:flex-row flex-col min-h-full">
      <div className="h-auto flex md:text-8xl text-5xl md:m-0 my-10 mx-auto">
        <div className="grid p-2 my-auto">
          <p>o</p>
          <p>n</p>
          <p>d</p>
          <p>ř</p>
          <p>e</p>
          <p className="row-span-2" style={size.width>768?{ fontSize: "192px", lineHeight: "150px", letterSpacing: "-20px" }:{fontSize: "150px", lineHeight: "50px", letterSpacing: "-25px"}}>
            j
          </p>

          <p className="col-start-4">h</p>
          <p>á</p>
          <p className="col-start-7">e</p>
          <p className="col-start-8">k</p>
        </div>
      </div>

      <div className="flex-1 flex m-10 md:m-0">
        <div className="m-auto">
          <h1 className="text-center mb-4 font-bold text-3xl">my new logo</h1>
          <div className="w-60 h-60 border-4 border-white rounded-full">

          </div>
        </div>
      </div>
    </div>
  );
};
