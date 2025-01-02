import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const SlideShow = () => {
  const { products } = useContext(ProductContext);
  const productDetails = products.map((product) => ({
    name: product.product_name,
    image: product.image_url,
  }));

  const imagesPerSlide = 6; // Number of images per slide
  const totalSlides = Math.ceil(productDetails.length / imagesPerSlide); // Total number of slides
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Loop through slides
    }, 2000); // Change slide every 2 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentDetails = productDetails.slice(currentSlide * imagesPerSlide, (currentSlide + 1) * imagesPerSlide);

  return (
    <div className="relative flex justify-center gap-5 p-5 m-10">
      <div className="overflow-hidden w-full">
        <div className="flex transition-all duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)` }}>
          {currentDetails.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/4 md:w-1/6 lg:w-1/8 px-2">
              <img
                className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
      >
        &gt;
      </button>
    </div>
  );
};

export default SlideShow;
