function Skill({ name, percent, width }) {
  return (
    <div className="scale p-4 flex flex-col gap-2 md:w-[45%] w-[90%]">
      <div className="flex justify-between">
        <h1>{name}</h1>
        <h1>{percent}</h1>
      </div>
      <div className="w-full bg-blue-800 rounded-md">
        <div className={`${width} bg-yellow-500 h-2 rounded-md`}></div>
      </div>
    </div>
  );
}

export default Skill;
