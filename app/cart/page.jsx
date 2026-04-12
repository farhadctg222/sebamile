"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="border p-3 mb-2 flex justify-between">
              <span>{item.name}</span>
              <span>৳ {item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>❌</button>
            </div>
          ))}

          <h2 className="mt-4 font-bold">Total: ৳ {total}</h2>

          <button
            onClick={() => router.push("/checkout")}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}