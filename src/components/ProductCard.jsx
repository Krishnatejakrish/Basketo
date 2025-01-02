import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ProductContext);
  
  const AddCart = (e) => {
    e.preventDefault();
    addToCart(product.product_id);
  };

  return (
    <div className="w-full sm:w-72 md:w-60 lg:w-76 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden ">
      <img
        src={product.image_url}
        alt={product.product_name}
        className="h-28 w-full object-cover hover:scale-80 transition-transform duration-300"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{product.product_name}</h2>
        <p className="text-sm text-gray-600 mt-1">Price: ₹{product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
        <p className="text-sm text-gray-600 mt-2">Category: {product.category}</p>
        <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        <p className="text-sm text-gray-600 mt-2">Rating: {product.rating} ⭐</p>

        <button
          className="mt-4 w-full py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700 transition duration-200 flex items-center justify-center"
          onClick={AddCart}
          aria-label={`Add ${product.product_name} to cart`}
        >
          Add to <FaCartPlus className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
