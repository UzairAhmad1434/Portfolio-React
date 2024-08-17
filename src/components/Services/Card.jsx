function Card({ card }) {
  return (
    <div className="cardd md:w-80 w-full main md:p-8 p-4 md:m-4 m-2 rounded-md shadow-sm shadow-white">
      <h1 className="card1 text-yellow-400 text-left text-2xl">{card}</h1>
      <p className="card1 text-md text-left font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id
        possimus corrupti, aliquid laudantium iste explicabo molestiae odio
        eius, praesentium ipsum. Repellendus mollitia magni enim. Maxime
        incidunt optio non aliquam accusamus, vel iste.
      </p>
    </div>
  );
}
export default Card;
