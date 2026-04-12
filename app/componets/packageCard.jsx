"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function PackageCard({ item }) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <div className="relative">
        <img
          src={item.image || "/food.jpg"}
          alt={item.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow">
          Popular
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {item.name}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-extrabold text-green-600 mb-4">
          ৳ {item.price}
        </p>

        {/* Buttons */}
        <div className="flex gap-2">
          
          {/* ✅ Add to Cart */}
          <button
            onClick={() => addToCart(item)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            Add to Cart
          </button>

          {/* ✅ Direct Order (old system) */}
          <button
            onClick={() => router.push(`/order/${item.id}`)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}