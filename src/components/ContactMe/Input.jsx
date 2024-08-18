import PropTypes from "prop-types";
function Input({ className, type, placeholder }) {
  return (
    <input
      className={`${className} side text-white py-2 px-4 About_me rounded-md transition-all transition-300 ease-in-out`}
      type={type}
      name="email"
      placeholder={placeholder}
      id=""
    />
  );
}
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Input;
