
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './components/home.jsx'
import Products from "./components/products/products.jsx";
import Signup from "./components/authentication/signup.jsx";
import Login from './components/authentication/Login.jsx'
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/footer.jsx";
import About from "./components/about.jsx";
import ProductDetails from "./components/products/productdetails.jsx";
import WishlistPage from "./components/products/WishlistPage.jsx";
import CartPage from "./components/products/CartPage.jsx";








export default function App(){

  return (
   

<BrowserRouter>
<Navbar />

<Routes>


  
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/Login' element={ <Login />} />
  <Route path="/about" element={<About />} />
  <Route path="/products/:id" element={<ProductDetails />} />
  <Route path="/cart" element={<CartPage />} />
<Route path="/wishlist" element={<WishlistPage />} />

</Routes>

<Footer />
</BrowserRouter>
 



  )
}