const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-100 to-red-400 text-black p-10 rounded-2xl shadow-lg ">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/images/hero_image.png"
          alt="Delicious Food"
          className="rounded-2xl shadow-2xl w-full h-80 object-cover  "
        />
      </div>

      {/* Text & Button Section */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-12">
        <h2 className="text-4xl font-extrabold mb-4 font-serif">
          Welcome to <span className="text-red-700">Foodie</span>
        </h2>
        <p className="text-xl mb-4 font-semibold">
          Craving something delicious? We've got you covered!
        </p>
        <p className="text-lg leading-relaxed">
          Welcome to Foodie, where flavor meets convenience! Explore a world of
          mouthwatering meals from your favorite local restaurants, delivered
          hot and fresh right to your doorstep. Order now and satisfy your
          cravings in just a few taps!
        </p>
        <button className="mt-6 bg-red-700 hover:bg-yellow-400 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
