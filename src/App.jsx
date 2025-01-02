import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ProductContextProvider } from "./context/ProductContext";
import ProductDetail from "./pages/ProductDetail";
import { ToastContainer } from "react-toastify";
// import SlideShow from "./components/SlideShow";



const App = () => {
  return (
    <main>
      <ProductContextProvider>
      <Navbar />
      <ToastContainer />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/products" element={<ProductDetail/>} />
       
      </Routes>
      <Footer />
      </ProductContextProvider>
    </main>
  );
};
export default App;