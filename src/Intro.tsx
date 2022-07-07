export const Intro = () => {
  return (
    <div className="w-full h-full bg-black font-roboto flex text-white md:flex-row flex-col">
      <div className="h-full flex  text-8xl">
        <div className="my-auto grid p-2">
          <p>o</p>
          <p>n</p>
          <p>d</p>
          <p>r</p>
          <p>e</p>
          <p className="row-span-2" style={{ fontSize: "192px", lineHeight: "150px", letterSpacing: "-20px" }}>
            j
          </p>

          <p className="col-start-4">h</p>
          <p>á</p>
          <p className="col-start-7">e</p>
          <p className="col-start-8">k</p>
        </div>
      </div>

      <div className="flex-1 flex">
        <div className="m-auto">
          <h1 className="text-center mb-4 font-bold text-3xl">my new logo</h1>
          <div className="w-60 h-60 border-4 border-white rounded-full">

          </div>
        </div>
      </div>
    </div>
  );
};
