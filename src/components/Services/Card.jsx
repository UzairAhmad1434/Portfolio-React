import PropTypes from "prop-types";
function Card({ card }) {
  return (
    <div className="cardd flex flex-col  lg:w-80 md:w-96 w-full main md:p-8 p-4 md:m-4 m-4 rounded-md shadow-sm shadow-white">
      <h1 className="card1 text-yellow-400 text-left text-2xl py-2">{card}</h1>
      <p className="card1 text-md text-left font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id
        possimus corrupti, aliquid laudantium iste explicabo molestiae odio
        eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime
        incidunt optio non aliquam accusamus, vel iste.
      </p>
    </div>
  );
}
Card.propTypes = {
  card: PropTypes.string.isRequired,
};
export default Card;
