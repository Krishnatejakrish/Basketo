import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);

  // Filter states
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default price range: 0 to 1000
  const [rating, setRating] = useState(0); // Rating filter (min rating)

  // Categories (you can modify this list based on the actual categories in your products)
  const categories = [
    "electronics",
    "clothing",
    "furniture",
    "toys",
    "beauty",
    "decor",
  ];
  // electronics, clothing, home decor, beauty, toys

  // Filtered products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Check category filter
    const categoryMatch = category ? product.category === category : true;

    // Check price range filter
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

    // Check rating filter
    const ratingMatch = product.rating >= rating;

    return categoryMatch && priceMatch && ratingMatch;
  });

  return (
    <div>
      {/* Filters Section */}
      <div className="flex gap-6 p-5 border-b mb-6">
        {/* Category Filter */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="flex flex-col">
          <label className="text-lg font-semibold mb-2">Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <span className="mt-2">
            {priceRange[0]} - {priceRange[1]} ₹
          </span>
        </div>

        {/* Rating Filter */}
        <div className="flex flex-col width-1/3">
          <label className="text-lg font-semibold mb-2">Rating</label>
          <select
            onChange={(e) => setRating(Number(e.target.value))}
            value={rating}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value={0}>All</option>
            <option value={1}>1⭐</option>
            <option value={2}>2⭐</option>
            <option value={3}>3⭐</option>
            <option value={4}>4⭐</option>
            <option value={5}>5⭐</option>
          </select>
        </div>
      </div>

      {/* Products List */}

    {
      filteredProducts.length === 0 ? (
        <p className="text-xl text-center m-20 font-bold" >No products found in this category.</p>
      ):(
        <div className="flex flex-wrap justify-center gap-6 p-5">
        {filteredProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
      )
    }


    </div>
  );
};

export default ProductDetail;
