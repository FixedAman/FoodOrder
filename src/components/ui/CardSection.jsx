const CardSection = ({ currElem }) => {
  const { name, image, price } = currElem;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-80  ">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-red-500 font-bold text-lg">₹{price}</p>

        <div className="mt-4 flex gap-2">
          <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
            Buy Now
          </button>
          <button className="bg-gray-800 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
