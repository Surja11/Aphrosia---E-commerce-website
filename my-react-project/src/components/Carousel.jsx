import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="w-full bg-gradient-to-r from-pink-100 to to-blue-100">
      <Slider {...settings}>
        {data?.slice(0, 4)?.map((item, index) => (
          <div key={index}>
          
            <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-pink-100 to-blue-100 px-8 md:px-16 py-12 md:py-20 gap-8">
     
              <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                  {item.name}
                </h1>
                <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-4 md:mt-6 px-6 md:px-8 py-2 md:py-3 bg-blue-900 hover:bg-pink-900 text-white font-semibold rounded-full shadow-md transition duration-300">
                  Shop Now
                </button>
              </div>

             
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={`http://localhost:8000${item.img}`}
                  alt={item.name}
                  className="w-64 h-64 md:w-[400px] md:h-[400px] object-cover rounded-2xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;