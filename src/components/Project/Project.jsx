const Project = () => {
  return (
    <>
      <div className="text-white About_me skillpage flex-col md:h-[80vh] sm:h-auto items-center justify-center p-4 md:p-8 ">
        <h1 className="heading2 text-4xl px-4 text-center">
          My <span className="text-yellow-500">Projects</span>
        </h1>
        <div className=" flex flex-wrap flex-row gap-4 items-center p-4 justify-center ">
          <div className="bg-weather bg-cover p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <h1 className="text-2xl text-yellow-500 font-medium">
              Weather App
            </h1>
            <p className="text-md text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              aperiam harum
            </p>
          </div>
          <div className="bg-study bg-cover p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <h1 className="text-2xl text-yellow-500 font-medium">StudyBuddy</h1>
            <p className="text-md text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              aperiam harum
            </p>
          </div>
          <div className="bg-cover rounded-md bg-currency w-72 h-48 ">
            <div className="hover:bg-gradient-to-r from-sky-500 to-indigo-500 flex p-2  items-center justify-center flex-col w-72 h-48 rounded-md">
              <h1 className="text-2xl text-yellow-500 font-medium">
                Currency Converter
              </h1>
              <p className="text-md text-center ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                aperiam harum
              </p>
            </div>
          </div>
          <div className="bg-calculator bg-cover p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <h1 className="text-2xl text-yellow-500 font-medium">Calculator</h1>
            <p className="text-md text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              aperiam harum
            </p>
          </div>
          <div className="bg-store bg-cover p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <h1 className="text-2xl text-yellow-500 font-medium">
              Ecommerce Store
            </h1>
            <p className="text-md text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              aperiam harum
            </p>
          </div>
          <div className="bg-tictac bg-cover p-2 flex items-center justify-center flex-col w-72 h-48 rounded-md">
            <h1 className="text-2xl text-yellow-500 font-medium">
              Tic Tac Toe
            </h1>
            <p className="text-md text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              aperiam harum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
