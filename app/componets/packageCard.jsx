"use client";

import { useCart } from "../context/CartContext";

export default function PackageCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      
      {/* Image with overlay */}
      <div className="relative">
        <img
          src={item.image || "/food.jpg"}
          alt={item.name}
          className="w-full h-32 object-cover"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

        {/* price badge */}
        <span className="absolute bottom-2 left-2 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-md shadow">
          ৳{item.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {item.name}
        </h2>

        <p className="text-[11px] text-gray-500 line-clamp-2 mt-1">
          {item.description}
        </p>

        {/* Button */}
        <button
          onClick={() => addToCart(item)}
          className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded-lg transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}