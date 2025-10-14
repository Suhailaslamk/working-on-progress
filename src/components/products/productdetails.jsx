// import { useParams } from "react-router-dom"
// import { useProducts } from "../../context/prodcontxt"


// export default function ProductDetails(){
//     const {id}=useParams()
    
//     const { products}=useProducts()

//     const product =products.find((p)=> p.id === parseInt(id))
//      if (!product) return <p className="text-center text-white p-8">Loading...</p>;
//     return (
//         <div className="min-h-screen bg-gray-200 flex flex-col md:flex-row p-8 gap-8 text-gray-900 mt-16 ">
//             <div className="md:w-1/2">
//                 <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg object-cover" />
//                 <img src={product.hover} alt={product.name} className="w-full h-auto rounded-lg object-cover" />

                
//             </div>
//             <div className="md:w-1/2 flex flex-col justify-between ">
//             <div className="fixed">
//                  <h1 className="text-4xl font-bold">{product.name}</h1>
//                  <p className="text-gray-400 mt-2">{product.category}</p>
//                  <p className="text-2xl font-semibold mt-4">${product.price}</p>
//                  <p className="mt-6 text-gray-300">{product.description}</p>
//                   <button className="mt-6 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition ">
//                     Buy Now
//                 </button>
//                 </div>
               

//                 </div>

//         </div>
//     )
// }

import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/prodcontxt";
import { useCart } from "../../context/cartcontext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addToCart, buyNow } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
  const found = products.find((p) => p.id === parseInt(id));

  if (found) {
    setProduct(found);
    setSelectedImage(found.image);
  } else {
    // Fetch directly from API if not found in context
    axios
      .get(`http://localhost:3001/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.image);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }
}, [id, products]);


  if (!product)
    return <p className="text-center text-gray-600 p-10">Loading product...</p>;

  const imageList = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
    product.hover,
  ].filter(Boolean);

  // const handleAddToCart = async () => {
  //   if (product.stock <= 0) {
  //     alert("❌ Out of stock!");
  //     return;
  //   }

  //   // Update local stock
  //   const updatedStock = product.stock - quantity;
  //   const updatedProduct = { ...product, stock: updatedStock };

  //   try {
  //     await axios.patch(`http://localhost:3001/products/${product.id}`, {
  //       stock: updatedStock,
  //     });

  //     // Add to cart
  //     await addToCart({ ...product, quantity });
  //     setProduct(updatedProduct);
  //     alert("✅ Added to cart!");
  //   } catch (err) {
  //     console.error("Error updating stock:", err);
  //   }
  // };

  // const handleBuyNow = async () => {
  //   if (product.stock <= 0) {
  //     alert("❌ Out of stock!");
  //     return;
  //   }

  //   try {
  //     await axios.patch(`http://localhost:3001/products/${product.id}`, {
  //       stock: product.stock - 1,
  //     });
  //     await buyNow();
  //     alert("🛍️ Purchase successful!");
  //     navigate("/products");
  //   } catch (err) {
  //     console.error("Error during purchase:", err);
  //   }
  // };

  const handleAddToCart = async () => {
  if (product.stock <= 0) {
    alert("❌ Out of stock!");
    return;
  }

  const updatedStock = product.stock - quantity;
  const updatedProduct = { ...product, stock: updatedStock };

  try {
    // Update backend stock
    await axios.patch(`http://localhost:3001/products/${product.id}`, {
      stock: updatedStock,
    });

    // Add (or increase quantity) in cart
    await addToCart({ ...product, quantity });

    // Update local state instantly
    setProduct(updatedProduct);

    alert(`✅ Added ${quantity} item(s) to cart!`);
  } catch (err) {
    console.error("Error updating stock:", err);
  }
};

const handleBuyNow = async () => {
  if (product.stock <= 0) {
    alert("❌ Out of stock!");
    return;
  }

  const updatedStock = product.stock - 1;

  try {
    await axios.patch(`http://localhost:3001/products/${product.id}`, {
      stock: updatedStock,
    });

    setProduct({ ...product, stock: updatedStock });
    await buyNow({ ...product, quantity: 1 });

    alert("🛍️ Purchase successful!");
    navigate("/products");
  } catch (err) {
    console.error("Error during purchase:", err);
  }
};


  return (
    <div className="min-h-screen bg-[#f5f5f0] text-gray-900 flex flex-col lg:flex-row gap-10 px-8 md:px-20 py-16 mt-10">
      {/* Left - Scrollable Images */}
      <div className="lg:w-1/2 flex gap-4">
        <div className="hidden md:flex flex-col gap-3 overflow-y-auto h-[80vh] pr-2">
          {imageList.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Product ${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-24 h-24 object-cover rounded-xl cursor-pointer border ${
                selectedImage === img
                  ? "border-gray-900"
                  : "border-transparent hover:border-gray-400"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full max-h-[80vh] object-cover rounded-3xl shadow-md"
          />
        </div>
      </div>

      {/* Right - Product Info */}
      <div className="lg:w-1/2 flex flex-col justify-start lg:sticky lg:top-24 space-y-6">
        <h1 className="text-4xl font-[Cinzel]">{product.name}</h1>
        <p className="text-gray-500 text-lg">{product.category}</p>

        <p className="text-3xl font-semibold">${product.price}</p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex items-center gap-4">
          <p className="text-gray-600 text-sm">
            Stock:{" "}
            <span
              className={`font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
            </span>
          </p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <label className="text-gray-700 text-sm">Quantity:</label>
          <input
            type="number"
            min="1"
            max={product.stock}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20 text-center border border-gray-300 rounded-md py-1"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
  <button
    onClick={handleAddToCart}
    disabled={product.stock <= 0}
    className={`flex-1 py-3 rounded-full transition ${
      product.stock <= 0
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-gray-900 text-white hover:bg-gray-800"
    }`}
  >
    🛒 Add to Cart
  </button>

  <button
    onClick={handleBuyNow}
    disabled={product.stock <= 0}
    className={`flex-1 py-3 rounded-full border transition ${
      product.stock <= 0
        ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
        : "bg-white border-gray-900 text-gray-900 hover:bg-gray-100"
    }`}
  >
    💳 Buy Now
  </button>
</div>
<button onClick={()=>{
  navigate(-1)
}}>Go back</button>

      </div>
    </div> 
  );
}
