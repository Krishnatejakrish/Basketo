import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(ProductContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle item removal
  const handleRemoveFromCart = (productId, productName) => {
    removeFromCart(productId);
    toast.info(`${productName} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Handle clear cart
  const handleClearCart = () => {
    clearCart();
    toast.warning("Cart cleared!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center my-4">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-center text-3xl font-medium font-bold text-red-500 m-20 ">
            Your cart is empty.
          </p>
          <Link
            to="/products"
            className="block text-center w-60 text-xl font-semibold text-white bg-blue-600 px-6 py-2 rounded-md mx-auto"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition duration-300 ease-in-out"
              >
                <img
                  src={item.image_url}
                  alt={item.product_name}
                  className="h-32 w-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-medium">{item.product_name}</h3>
                  <p className="text-gray-600">Price: ₹{item.price}</p>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md font-bold"
                  onClick={() =>
                    handleRemoveFromCart(item.product_id, item.product_name)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price & Clear Cart */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
            <div>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold mr-4"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold"
                // Add Checkout functionality here
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
