import React from "react";
import HeroSlider from "../Components/HeroSlider";
import Headings from "../Components/Headings";
import CategorySection from "../Components/CategorySection";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <div>
      <div>
        <HeroSlider />
      </div>

      <div className="text-center sm:my-10 my-5 ">
        <Headings text1={"Explore Our"} text2={"Products"} lineBreak={false} />
      </div>

      <div>
        <CategorySection />
      </div>

      <div className="text-center sm:my-10 my-5 ">
        <Headings text1={"Our"} text2={"Bestsellers"} lineBreak={false} />
      </div>

      {/* Best Seller Section  */}
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      {/* Limited timeOffer section */}

      <div className="max-w-7xl  mx-auto text-center sm:my-10 my-5 ">
        <Headings text1={"Flyer"} text2={"Deals"} lineBreak={false} />
      </div>

      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Home;
