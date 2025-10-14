import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiURL = "http://localhost:3001";

  // ✅ Fetch cart + wishlist when app starts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          axios.get(`${apiURL}/cart`),
          axios.get(`${apiURL}/wishlist`),
        ]);
        setCart(cartRes.data);
        setWishlist(wishlistRes.data);
      } catch (err) {
        console.error("Error fetching cart/wishlist:", err);
      }
    };
    fetchData();
  }, []);

  // ✅ Add to Cart
//   const addToCart = async (product) => {
//     try {
//       const exists = cart.find((item) => item.id === product.id);
//       if (exists) {
//         alert("🛒 Already in cart!");
//         return;
//       }
//       const res = await axios.post(`${apiURL}/cart`, product);
//       setCart((prev) => [...prev, res.data]);
//       alert("✅ Added to cart!");
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//     }
//   };




const addToCart = async (product) => {
  try {
    // if already in cart (by productId) don't add
    const exists = cart.find((item) => item.productId === product.id);
    if (exists) {
      alert("🛒 Already in cart!");
      return;
    }

    // create cart entry that references original product
    const cartEntry = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const res = await axios.post(`${apiURL}/cart`, cartEntry);

    // res.data will be the actual cart entry including json-server assigned id
    setCart((prev) => [...prev, res.data]);
    alert("✅ Added to cart!");
  } catch (err) {
    console.error("Error adding to cart:", err);
    alert("Error adding to cart!");
  }
};
















  // ✅ Add to Wishlist
  const addToWishlist = async (product) => {
    try {
      const exists = wishlist.find((item) => item.id === product.id);
      if (exists) {
        alert("💖 Already in wishlist!");
        return;
      }
      const res = await axios.post(`${apiURL}/wishlist`, product);
      setWishlist((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  };

  // ✅ Remove from Cart
//   const removeFromCart = async (id) => {
//     try {
//       await axios.delete(`${apiURL}/cart/${id}`);
//       setCart((prev) => prev.filter((item) => item.id !== id));
//     } catch (err) {
//       console.error("Error removing from cart:", err);
//     }
//   };

const removeFromCart = async (cartEntryId) => {
  try {
    await axios.delete(`${apiURL}/cart/${cartEntryId}`);
    setCart((prev) => prev.filter((item) => item.id !== cartEntryId));
  } catch (err) {
    console.error("Error removing from cart:", err);
    alert("Error removing item from cart");
  }
};

  // ✅ Remove from Wishlist
  const removeFromWishlist = async (id) => {
    try {
      await axios.delete(`${apiURL}/wishlist/${id}`);
      setWishlist((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  // ✅ Buy Now
  const buyNow = async () => {
    try {
      for (const item of cart) {
        await axios.delete(`${apiURL}/cart/${item.id}`);
      }
      setCart([]);
      alert("✅ Purchase successful!");
    } catch (err) {
      console.error("Error buying items:", err);
    }
  };

  // ✅ Derived values
  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        buyNow,
        loading,
        cartCount,
        wishlistCount,
        isInCart,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
