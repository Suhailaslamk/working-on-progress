

// import { Heart,ShoppingCart } from "lucide-react"
// import { useProducts } from "../../context/prodcontxt";
// import { useState } from "react";

// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../context/cartcontext";



 

// export default function Products() {
 
  // const [products,setProducts]=useState([])
  
  // const [category,setCategory]=useState("All")


//   const {addToCart,addToWishlist,isInWishlist}=useCart()

// const { filteredProducts, category, setCategory } = useProducts();


// const [search,setSearch]=useState("")


// const navigate=useNavigate()



//  const searchedProducts = filteredProducts.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase())
//   );





  

  // useEffect(()=> {
  //   axios.get("http://localhost:3001/products")
  //   .then((res)=> setProducts(res.data))
  //   .catch((err)=> console.error("Error fetching products:", err.message))
  // },[])


  // const filterdProducts=products.filter((product)=> {
  //   const matchesCategory = category === "All" || product.category === category;
  //    const matchesSearch = product.name
  //     .toLowerCase()
  //     .includes(search.toLowerCase())
  //     return matchesCategory && matchesSearch;
  // })
  // product.name.toLowerCase().includes(search.toLowerCase())})


//   const categories =["All", "Prada", "Tommy Hilfigher", "Louis Vuitton", "Premium"]
  
//   return (

//     <div className="min-h-screen bg-[#f5f5f0] text-gray-900 px-6 md:px-16 py-12 mt-18">

      
//         <h1 className="text-5xl font-[Cinzel] tracking-[0.25em] text-center mb-10">What we have</h1>






// {/* categories */}

// <div className="flex flex-wrap justify-center gap-4 mb-8">
//   {categories.map((cat)=> (
//     <button
//     key={cat}
//     onClick={()=> setCategory(cat)}
//     className={`px-5 py-2 rounded-full border transition-all duration-300 ${category === cat
//       ? "bg-gray-900 text-white border-gray-900"
//       :"bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
//     }`}
// >
//   {cat}
// </button>
//   ))}
// </div>




// {/* Search Bar */}

//         <div className="flex justify-center mb-10">


//           <input 
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 placeholder-gray-400"
// />
//      </div>




//      {/* Product Grid */}




//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

//           {searchedProducts.map((product)=> (

//             <div 
//             key={product.id}
//             className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
//             onClick={() => navigate(`/products/${product.id}`)} >


//                   {/* Wishlist Icon */}


//                   <button className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow hover:bg-white transition z-20"
//                   onClick={(e)=>{ e.stopPropagation();
//                      addToWishlist(product)
//                     }}>
//               <Heart className={`w-5 h-5 transition ${
//               isInWishlist(product.id) ? "text-red-500 fill-red-500" : "text-gray-700"}`} />
//             </button>


           

// {/* Product Image */}



//   <div className="w-full h-80 overflow-hidden z-10">


          
//             <img src={product.image} 
//             alt={product.name}
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//             </div>
// {/* product info */}

//             <div className="p-6 flex flex-col justify-between">
//               <div>

//             <h3 className="text-2xl font-semibold">{product.name}</h3>
//              <p className="text-gray-500 text-sm mt-1">{product.category || "new arraival"}</p>
//              </div>
//              <div className="mt-4 flex justify-between items-center">
//               <p className="text-lg font-medium">${product.price}</p>

            

//               {/* Add to Cart Button */}
//               <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300"
//               onClick={(e)=> {
//                 e.stopPropagation();
//                addToCart(product);
                
//               }}>
//                  <ShoppingCart size={18} /> Add to Cart
//               </button>
//               </div>
//               </div>
//               </div>
//           ))}
//           </div>



//           {/* If No Products Found */}


//           {searchedProducts.length===0 && (
//             <p className="text-center text-gray-500 mt-16 text-lg">
//                No products found matching your search.
//             </p>
//           )}
//           </div>

//         )
//       }



           import { Heart, ShoppingCart } from "lucide-react";
import { useProducts } from "../../context/prodcontxt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import axios from "axios";

export default function Products() {
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  const { filteredProducts, category, setCategory } = useProducts();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ["All", "Prada", "Tommy Hilfigher", "Louis Vuitton", "Premium"];

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-gray-900 px-6 md:px-16 py-12 mt-18">
      <h1 className="text-5xl font-[Cinzel] tracking-[0.25em] text-center mb-10">
        What we have
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              category === cat
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-5 py-3 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 placeholder-gray-400"
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {searchedProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {/* Wishlist Icon */}
            <button
              className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow hover:bg-white transition z-20"
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
            >
              <Heart
                className={`w-5 h-5 transition ${
                  isInWishlist(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-700"
                }`}
              />
            </button>

            {/* Product Image */}
            <div className="w-full h-80 overflow-hidden z-10">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.category || "New Arrival"}
                </p>
                <p className="text-lg font-medium mt-2">₹{product.price}</p>
                <p
                  className={`text-sm font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of Stock"}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                {/* Add to Cart */}
                <button
                  disabled={product.stock <= 0}
                  onClick={async (e) => {
                    e.stopPropagation();

                    if (product.stock <= 0) {
                      alert("❌ Out of stock!");
                      return;
                    }

                    const updatedStock = product.stock - 1;

                    try {
                      // Update stock in backend
                      await axios.patch(
                        `http://localhost:3001/products/${product.id}`,
                        { stock: updatedStock }
                      );

                      // Add to cart
                      await addToCart({ ...product, quantity: 1 });

                      // Update stock locally for instant UI
                      product.stock = updatedStock;

                      alert("✅ Added 1 item to cart!");
                    } catch (err) {
                      console.error("Error updating stock:", err);
                    }
                  }}
                  className={`flex items-center gap-2 flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    product.stock <= 0
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <ShoppingCart size={18} />{" "}
                  {product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
                </button>

                {/* Buy Now */}
                <button
                  disabled={product.stock <= 0}
                  onClick={async (e) => {
                    e.stopPropagation();

                    if (product.stock <= 0) {
                      alert("❌ Out of stock!");
                      return;
                    }

                    const updatedStock = product.stock - 1;

                    try {
                      await axios.patch(
                        `http://localhost:3001/products/${product.id}`,
                        { stock: updatedStock }
                      );

                      product.stock = updatedStock;
                      alert("🛍️ Purchase successful!");
                      navigate(`/products/${product.id}`);
                    } catch (err) {
                      console.error("Error during purchase:", err);
                    }
                  }}
                  className={`flex-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    product.stock <= 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-blue-700"
                  }`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* If No Products Found */}
      {searchedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-lg">
          No products found matching your search.
        </p>
      )}
    </div>
  );
}
