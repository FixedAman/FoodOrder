import api from "../api/Food.json";
import CardSection from "./ui/CardSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const FoodOrder = () => {
  const [cart, setCart] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // total price
  const totalPrice = cart.reduce(
    (curr, item) => curr + item.price * item.quantity,
    0
  );
  const addToCart = (item) => {
    const existingItem = cart.find((curr) => curr.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };
  const cartCross = () => {
    setCart([]);
  };
  const handleOrder = () => {
    alert(`Thank You For Ordering From Us`);
    setCart([]);
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8">
        Our <span className="text-red-500">Menu</span>
      </h1>

      <Slider {...settings} className="px-4 overflow-hidden cursor-grab">
        {api.map((currElem) => (
          <CardSection
            key={currElem.id}
            currElem={currElem}
            addToCart={addToCart}
          />
        ))}
      </Slider>

      <div className="mt-10 p-6 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gradient-to-r from-orange-100 to-red-400 rounded-lg shadow-lg flex flex-col">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-orange-700 mb-4 flex gap-2 items-center">
          <BsFillCartCheckFill /> Cart
        </h2>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="text-lg text-orange-700 font-semibold flex flex-col sm:flex-row items-start sm:items-center gap-2"
              >
                {/* Item Image (Hidden on Mobile) */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full hidden sm:block"
                />

                {/* Item Details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="break-words">{item.name}</span>
                  <span className="whitespace-nowrap">
                    - ₹{item.price} x {item.quantity}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total and Actions */}
        <div className="text-2xl font-bold text-red-600 mt-4 flex flex-col sm:flex-row gap-2 items-center">
          <span>Total: ₹{totalPrice}</span>
          {cart.length > 0 && (
            <div className="flex gap-2">
              <RxCross2
                onClick={cartCross}
                className="h-6 w-6 cursor-pointer hover:text-red-700"
              />
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
                onClick={handleOrder}
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
