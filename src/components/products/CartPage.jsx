// import { useCart } from "../../context/cartcontext";



// export default function CartPage(){
//     const{cart,removeFromCart,buyNow}=useCart()
//  return (
//     <div className="min-h-screen bg-[#f5f5f0] px-8 py-10 mt-12">
//       <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
//               <div className="flex items-center gap-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p>${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             onClick={buyNow}
//             className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-gray-800"
//           >
//             Buy Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
import { useCart } from "../../context/cartcontext";

export default function CartPage() {
  const { cart, removeFromCart, buyNow } = useCart();

  return (
    <div className="min-h-screen bg-[#f5f5f0] px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <img src={entry.image} alt={entry.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h2 className="text-xl font-semibold">{entry.name}</h2>
                  <p>${entry.price}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => removeFromCart(entry.id)}   // <-- pass cart entry id
                  className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
                <span className="text-sm text-gray-600">Qty: {entry.quantity || 1}</span>
              </div>
            </div>
          ))}
          <button
            onClick={buyNow}
            className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
          >
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}
