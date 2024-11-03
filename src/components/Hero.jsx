import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center text-center bg-hero-pattern">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 text-white px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Discover Your Style
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Shop the latest trends and elevate your wardrobe with our exclusive collection.
        </p>
        <a
          href="/products"
          className=" bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
