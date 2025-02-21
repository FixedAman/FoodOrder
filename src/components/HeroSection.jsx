const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-lg ">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Delicious Food"
          className="rounded-lg shadow-md w-full h-1/2 object-cover"
        />
      </div>

      {/* Text & Button Section */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8 ">
        <h2 className="text-3xl font-bold text-gray-800">
          Satisfy Your Cravings
        </h2>
        <p className="text-gray-600 mt-2">
          Discover the best meals at unbeatable prices. Fresh, delicious, and
          delivered fast!
        </p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
