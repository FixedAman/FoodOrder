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
    <div className="container mx-auto p-6  ">
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

      <div className="mt-10 p-6  w-1/3 bg-gradient-to-r from-orange-100 to-red-400 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-700 mb-4  flex gap-2 ">
          <BsFillCartCheckFill /> Cart  
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 ">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="text-lg text-orange-700 font-semibold flex items-center gap-4  "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full mt-2 "
                />
                {item.name} - ₹{item.price} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <div className="text-2xl font-bold text-red-600 mt-4 flex gap-2 cursor-pointer ">
          Total: ₹{totalPrice}
          {cart.length > 0 && (
            <>
              <RxCross2
                onClick={cartCross}
                className="h-4 mt-2 cursor-pointer"
              />
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition "
                onClick={handleOrder}
              >
                Order Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodOrder;
