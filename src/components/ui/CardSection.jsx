const CardSection = ({ currElem, addToCart }) => {
  const { name, image, price } = currElem;

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden z-0 transition-transform transform hover:scale-105 w-75 border-2 border-transparent hover:border-red-400 hover:shadow-red-400">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-t-2xl hover:opacity-90 transition duration-300"
      />
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-red-500 font-extrabold text-xl">₹{price}</p>

        <div className="mt-6 flex gap-4">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer text-white px-3 py-3 rounded-lg hover:from-orange-500 hover:to-red-500 shadow-md hover:shadow-lg transition">
            Buy Now
          </button>
          <button
            className="bg-gray-800 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-900 shadow-md hover:shadow-lg transition"
            onClick={() => addToCart(currElem)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
