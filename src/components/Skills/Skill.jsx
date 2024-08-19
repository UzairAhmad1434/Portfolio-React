import PropTypes from "prop-types";
function Skill({ name, percent, width }) {
  return (
    <div className="text-white  p-[24px] flex flex-col gap-2 md:w-[45%] w-[90%]">
      <div className="flex justify-between">
        <h1>{name}</h1>
        <h1>{percent}</h1>
      </div>
      <div className="w-full h-[10px] bg-blue-700 rounded-md">
        <div
          className={`${width} scale bg-yellow-500 h-[10px] rounded-md`}
        ></div>
      </div>
    </div>
  );
}
Skill.propTypes = {
  name: PropTypes.string,
  percent: PropTypes.string,
  width: PropTypes.string,
};

export default Skill;
