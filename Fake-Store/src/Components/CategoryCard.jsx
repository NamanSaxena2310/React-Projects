import React from "react";

const CategoryCard = ({ source, alt, categoryName }) => {
  return (
    <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center group cursor-pointer">
  <img
    src={source}
    alt={alt}
    className="
      h-full w-full object-cover rounded-full 
      border-2 border-transparent
      transition-all duration-500 ease-in-out
      group-hover:border-secondary
      group-hover:scale-105
    "
  />
  <p className="absolute text-white text-lg sm:text-xl font-bold text-center">
    {categoryName}
  </p>
</div>

  );
};

export default CategoryCard;
