import api from "../api/Food.json";
import CardSection from "./ui/CardSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FoodOrder = () => {
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
  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Menu
      </h1>

      <Slider {...settings} className="px-4">
        {api.map((currElem ) => (
          <CardSection key={currElem.id} currElem={currElem} />
        ))}
      </Slider>
    </div>
  );
};

export default FoodOrder;
