import React, { useContext } from "react";
// import ProductDetail from './ProductDetail'
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";
import SlideShow from "../components/SlideShow";

const Home = () => {
  const { products } = useContext(ProductContext);
  const homeProducts = products.slice(0, 20);
  return (
    <>
      <SlideShow />
      <div className="flex flex-wrap justify-center gap-6 p-5">
        {/* <ProductDetail/> */}

        {homeProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
