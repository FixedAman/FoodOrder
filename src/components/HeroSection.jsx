const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-lg ">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/images/hero_image.png"
          alt="Delicious Food"
          className="rounded-lg shadow-md w-full h-100 object-cover"
        />
      </div>

      {/* Text & Button Section */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-1 font-serif ">
        Welcome to <span className="text-red-500">Foodie</span> 
        </h2>
        <p className="text-red-500 mt-2 font-bold text-2xl mb-1 ">
        Craving something delicious? We've got you covered! 
        </p>
        <p className="text-amber-700 ">
            Welcome to Foodie, where flavor meets convenience! Explore a world of mouthwatering meals from your favorite local restaurants,delivered hot and fresh right to your doorstep.  Order now and satisfy your cravings in just a few taps! 
        </p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
