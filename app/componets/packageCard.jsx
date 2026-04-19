"use client";

import { useCart } from "../context/CartContext";

export default function PackageCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      
      {/* Image */}
      <img
        src={item.image || "/food.jpg"}
        alt={item.name}
        className="w-full h-24 object-cover"
      />

      {/* Content */}
      <div className="p-2">
        <h2 className="text-xs font-semibold text-gray-800 truncate">
          {item.name}
        </h2>

        <p className="text-[10px] text-gray-500 truncate">
          {item.description}
        </p>

        <div className="mt-1">
          <span className="text-sm font-bold text-green-600">
            ৳{item.price}
          </span>

          <button
            onClick={() => addToCart(item)}
            className="w-full mt-1 bg-yellow-500 hover:bg-yellow-600 text-white text-[10px] py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}